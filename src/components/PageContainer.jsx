import styled from 'styled-components';

export const PageContainer = styled.main`
  display: flex;
  align-items: center;

  @media screen and (max-width: 432px) {
    flex-direction: column;
    width:100%;
    align-items:center;
    justify-content: center;
  }
`;