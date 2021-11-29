import { NextRouter, useRouter } from 'next/router';
import { useState } from 'react';
import { OPERATORS_LIST } from '../public/constants';
import {
  StyledOperatorsListButton,
  StyledListLogo,
  StyledOperatorsListSection,
  StyledOperatorsListButtonMore,
} from './style-operators-form';

export default function App() {
  const router: NextRouter = useRouter();
  // const {}
  const [index, setIndex] = useState(2);
  const lenOperatorsList = Object.keys(OPERATORS_LIST).length;
  // console.log(Object.keys(OPERATORS_LIST).length);
  return (
    <StyledOperatorsListSection>
      Выберите оператора
      {OPERATORS_LIST.map((element) => {
        if (index >= element.id)
          return (
            <StyledOperatorsListButton
              key={element.id}
              onClick={() => {
                router.push({
                  pathname: `/paymentform/[id]`,
                  query: { id: element.id },
                });
              }}
            >
              <StyledListLogo src={element.logo} />
              {element.name}
            </StyledOperatorsListButton>
          );
      })}
      <StyledOperatorsListButtonMore
        isDisabled={index === lenOperatorsList}
        onClick={() => setIndex(lenOperatorsList)}
      >
        Еще
      </StyledOperatorsListButtonMore>
    </StyledOperatorsListSection>
  );
}
