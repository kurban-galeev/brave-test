import { NextRouter, useRouter } from 'next/router';
import { OPERATORS_LIST } from './constants';
import {
  StyledOperatorsListButton,
  StyledListLogo,
  StyledOperatorsListSection,
} from '../styles/style-operators-form';

export default function App() {
  const router: NextRouter = useRouter();
  return (
    <StyledOperatorsListSection>
      Выберите оператора
      {OPERATORS_LIST.map((element) => (
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
      ))}
    </StyledOperatorsListSection>
  );
}
