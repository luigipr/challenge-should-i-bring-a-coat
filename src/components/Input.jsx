import styled from 'styled-components';

export const Input = styled.input`
  flex: 1 0;
  background: #EDEDEF;;
  outline: none;
  border-radius: 25px;
  font-family: inherit;
  padding-left: 20px;
  
  box-shadow: 0px 24px 48px 0px #314F7C14;

  @media screen and (max-width: 432px) {
    width: 90%; /* Alterando o width para ocupar toda a largura */
    align-items: center;
  }
`;