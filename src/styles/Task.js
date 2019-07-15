import styled from 'styled-components';
import c from './colors';

export const NewTaskBox = styled.div`
  
`;

export const Btn = styled.button`
  background: ${c.btnBg};
  border: 1px solid ${c.baseColor};
  padding: 10px;
  cursor: pointer;
`;

export const NewTaskInputs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewTaskLabel = styled.label`
position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 0 20px;
  &:after{
    position: absolute;
    content: ${props => (props.required ? '"required field"' : '')};
    right: 20px;
    top: 55%;
    color: ${c.danger}
  }
`;

export const Input = styled.input`
  height: 38px;
  padding: 6px;
`;

export const LabelText = styled.span`
  margin: 0 0 10px;
`;
