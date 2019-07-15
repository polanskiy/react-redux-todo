import styled from 'styled-components';
import c from './colors';

export const GlobalBox = styled.div`
  height: 100%;
  background: ${c.baseBg};
`;

export const MainBox = styled.div`
  background: #fff;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
