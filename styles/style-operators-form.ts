import styled from 'styled-components';

export const StyledListLogo = styled.img`
  margin-right: 8px;
  padding: 5px;
  width: 32px;
  filter: brightness(0.7);
`;
export const StyledHead = styled.header`
  margin-top: 40vh;
`;
export const StyledOperatorsListSection = styled.section`
  padding-top: 25vh;
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  font-size: 35px;
  color: #c4bdf2;
  @media (max-width: 425px) {
    font-size: 30px;
  }
`;

export const StyledOperatorsListButton = styled.button`
  margin: 12px;
  padding: 5px;
  justify-content: center;
  background: transparent;
  border: 1px solid #c4bdf2;
  border-radius: 10px;
  color: #c4bdf2;
  cursor: pointer;
  display: inline-flex;
  transition: 150ms;
  box-shadow: 0px 3px, 0px 5px 5px;
  font-size: 35px;

  &:hover {
    ${StyledListLogo} {
      filter: none;
    }
    transform: translateY(2px);
    box-shadow: 0px 0px, 0px 0px 0px;
  }
`;
