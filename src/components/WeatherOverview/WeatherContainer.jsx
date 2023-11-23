
import styled from 'styled-components';

export const WeatherContainer = styled.div`
  background-color: ${({ overviewBackground }) => overviewBackground};
  color: #fafafa;
  width: min(400px,100%);
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 18px;
  border-radius: 16px;
  transition: all .3s ease;

  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    h2{
      margin-bottom: auto;
    }
    p {
      font-size: 12px;
      line-height: 14px;
    }
  }

  & > div:last-of-type {
    display: flex;
    flex-direction: column;

    p {
      font-size: 14px;
      margin-bottom: 4px;
      text-align: right;
    }

    h2 {
      margin: 0;
      font-size: 32px;
    }
  }
`;