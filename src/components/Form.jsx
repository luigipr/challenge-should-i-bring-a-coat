import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  width: 500px;
  padding: 0 75px;
  height: 80px;
  padding-bottom: 30px;
  align-items:center;
  justify-content: center;

  @media screen and (max-width: 432px) {
    width: 90%; /* Alterando o width para ocupar toda a largura */
    align-items: center;
  }
`;