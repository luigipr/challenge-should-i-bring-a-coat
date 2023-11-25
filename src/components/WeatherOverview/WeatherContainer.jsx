import styled from "styled-components";

export const WeatherContainer = styled.div`
  background-color: #fff;
  color: #fafafa;
  width: 426px;
  height: 228px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  padding-bottom: 15px;
  transition: all 0.3s ease;
  align-self: center;
  border-bottom: 5px solid #EDEDED;

  h2 {
    color: ${({ overviewBackground }) => overviewBackground};
    font-family: Poppins;
    font-size: 80px;
    font-weight: 300;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;

  }
  img {
    width: 150px;
    height: 150px;
  }

  & > div:first-of-type {
    display: flex;
    flex-direction: row;
    height: 150px;
    justify-content: center;
    align-items: center;
  }

  & > div:last-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      font-size: 32px;
      margin-bottom: 4px;
      text-align: center;
      color: #000;
    }
  }
`;
