import styled from 'styled-components';

export const StyledPaymentFormSection = styled.section`
  text-align: center;
  padding-top: 20vh;
  margin: 0;
  font-family: cursive;
  font-size: 35px;
  color: #c4bdf2;
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  @media (max-width: 424px) {
    font-size: 30px;
    display: revert;
  }
`;

export const StyledPaymentFormInput = styled.input`
  background: transparent;
  border: 1px solid #c4bdf2;
  border-radius: 10px;
  width: 400px;
  padding: 3px;
  margin-top: 12px;
  color: #c4bdf2;
  outline: none;
  font-family: cursive;
  font-size: 35px;
  @media (max-width: 424px) {
    width: 300px;
  }
`;

export const StyledPaymentFormLabel = styled.label`
  padding-right: 8px;
`;
export const StyledPaymentFormLabelError = styled.label`
  font-size: 12px;
  padding-left: 8px;
  color: #c4bdf2;
  padding-top: 4px;
`;
export const StyledPaymentFormDiv = styled.div`
  display: inline-grid;
  text-align-last: start;
`;

export const StyledPaymentFormP = styled.p`
  padding: 6px;
  margin: 0;
`;
export const StyledLogo = styled.img`
  margin-right: 8px;
  padding: 5px,5px,0px,5px;
  width: 35px;
  height:35px;
`;

export const StyledPaymentFormButton = styled.button<{isDisabled: boolean}>`
  margin-top: 12px;
  padding: 5px;
  background: transparent;
  border: 1px solid #c4bdf2;
  border-radius: 10px;
  color: #c4bdf2;
  font-family: cursive;
  font-size: 35px;
  cursor: ${(props) => (props.isDisabled  ? 'not-allowed' : 'pointer')};
  transition: ${(props) => (props.isDisabled ? 'none' : '100ms')};
  box-shadow: ${(props) =>
    props.isDisabled ? '0px 0px, 0px 0px 0px' : '0px 3px, 0px 5px 5px'};
  &:hover {
    transform: ${(props) => (props.isDisabled ? 'none' : 'translateY(2px)')};
    box-shadow: ${(props) =>
      props.isDisabled ? 'none' : '0px 0px, 0px 0px 0px'};
  }
`;
