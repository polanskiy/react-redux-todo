import styled from 'styled-components';
import c from './colors';

export const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0, .4);
`;

export const ModalContent = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 40px auto 0;
  background: ${c.white};
  padding: 10px;
`;

export const ModalHeader = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${c.subBg};
  text-align: center;
  margin: 0 0 10px;
`;

export const ModalTitle = styled.h3`
  font-size: 20px;
  color: ${c.baseColor};
`;
