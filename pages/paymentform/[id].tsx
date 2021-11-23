import { useState } from 'react';
import {
  StyledPaymentFormSection,
  StyledPaymentFormInput,
  StyledPaymentFormLabel,
  StyledPaymentFormP,
  StyledPaymentFormButton,
  StyledPaymentFormLabelError,
  StyledPaymentFormDiv,
  StyledLogo,
} from '../../styles/style-payment-form';
import { OPERATORS_LIST } from '../constants';
import { NextRouter, useRouter } from 'next/router';

export default function PaymentForm() {
  const router: NextRouter = useRouter();
  const [paymentSum, setPaymentSum] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('89');
  const urlHandlePayment = 'http://localhost:3000/api/handlepayment';

  const regularExpression = () => {
    const regex = new RegExp(/\D/, 'g');
    return regex;
  };

  const handleChangeSum = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const sumValue = target.value;
    if (Number(sumValue) <= 1000 && Number(sumValue) > 0) {
      setPaymentSum(sumValue.replace(regularExpression(), ''));
    }
  };
  const handlePhoneChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const valueLength = target.value.length;
    const phoneValue = target.value;
    if (valueLength <= 11 && valueLength >= 2) {
      setPhoneNumber(phoneValue.replace(regularExpression(), ''));
    }
  };
  const emulationServer = async () => {
    const response = await fetch(urlHandlePayment);
    if (response.status !== 500) {
      if (confirm('Оплата успешна!')) {
        router.push('/');
      }
    } else {
      alert('Что то пошло не так.\nПопробуйте снова через некоторое время');
    }
  };
  const handlerDisplayOperator = (id: string) => {
    let nameOperator = '';
    let logoOperator = '';
    OPERATORS_LIST.map((element) => {
      if (element.id == +id) {
        nameOperator = element.name;
        logoOperator = element.logo;
      }
    });
    return { nameOperator, logoOperator };
  };
  const { nameOperator, logoOperator } = handlerDisplayOperator(
    String(router.query.id)
  );
  return (
    <StyledPaymentFormSection>
      Оплата
      <StyledPaymentFormP>
        <StyledLogo src={logoOperator} />
        {nameOperator}
      </StyledPaymentFormP>
      <StyledPaymentFormLabel>Номер телефона:</StyledPaymentFormLabel>
      <StyledPaymentFormDiv>
        <StyledPaymentFormInput
          type="tel"
          pattern="[7-8]{1}[9]{1}[0-9]{9}"
          value={phoneNumber}
          onChange={handlePhoneChange}
        />
        <StyledPaymentFormLabelError>
          Введите номер из 11 цифр
        </StyledPaymentFormLabelError>
      </StyledPaymentFormDiv>
      <StyledPaymentFormLabel>Сумма пополнения:</StyledPaymentFormLabel>
      <StyledPaymentFormDiv>
        <StyledPaymentFormInput
          type="number"
          max="1000"
          min="1"
          value={paymentSum}
          onChange={handleChangeSum}
        />
        <StyledPaymentFormLabelError>
          min 1 max 1000
        </StyledPaymentFormLabelError>
      </StyledPaymentFormDiv>
      <StyledPaymentFormButton
        isDisabled={!paymentSum || phoneNumber.length < 11}
        onClick={() => {
          if (paymentSum && phoneNumber.length === 11) {
            emulationServer();
          }
        }}
      >
        Оплатить
      </StyledPaymentFormButton>
    </StyledPaymentFormSection>
  );
}
