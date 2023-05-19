import styled from 'styled-components';

export const FormSection = styled('section')`
  display: flex;
  padding: 10px;
  gap: 10px;
  align-items: center;
  justify-content: ${(props) => (props.justify ? props.justify : 'start')};
`;

export const RadioContainer = styled('div')`
  position: relative;
  max-width: 200px;
  max-height: 200px;
  box-shadow: ${(props) =>
    props.shadow ? props.shadow : 'rgba(0, 0, 0, 0.24) 0px 3px 8px'};
`;

export const RadioInput = styled('input')`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: 2;
  opacity: 0;
`;
