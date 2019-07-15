import styled from 'styled-components';
import c from './colors';

export const GlobalBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  height: 100%;
`;

export const MainBox = styled.div`

`;

export const ContentBox = styled.div`
  padding: 20px;
  flex: 1 0 auto;
  background: ${c.white};
`;
