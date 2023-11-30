import styled from "styled-components";

export const Footer = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 0 75px;
  height: 80px;
  padding-bottom: 30px;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0em;
  align-items:center;
  justify-content: end;

  @media screen and (max-width: 432px) {
    width: 90%;
    font-size: 18px;
  }
`;