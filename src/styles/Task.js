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


export const TaskItemBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid ${c.baseColor};
  background: ${props => (props.complete ? c.mainBg : c.subBg)};
  margin: 35px 0; 
  transition: .3s;
`;

export const TaskItemTitle = styled.h3`
  margin: 0 0 10px;
  text-decoration: ${props => (props.complete ? 'line-through' : 'none')}
`;

export const TaskItemDescription = styled.p`
  margin: 0 0 20px;
`;

export const TaskItemComplete = styled.button`
  background: ${c.btnBg};
  border: 1px solid ${c.baseColor};
  cursor: pointer;
  padding: 10px;
  width: max-content;
  color: ${c.white};
`;
