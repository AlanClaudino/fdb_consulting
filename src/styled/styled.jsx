import styled from 'styled-components';

export const MainContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100svh;
`;

export const RowContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ColumnContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled('h1')`
  color: ${(props) => (props.color ? props.color : 'inherit')};
  font-size: 32px;
  font-family: 'Poppins', sans-serif;
  text-align: center;
`;

export const SubTitle = styled('h2')`
  color: ${(props) => (props.color ? props.color : 'inherit')};
  font-size: 28px;
  font-family: 'Poppins', sans-serif;
  text-align: center;
`;

export const Input = styled('input')`
  background: rgb(235, 235, 235);
  box-shadow: ${(props) => (props.shadow ? props.shadow : 'none')};
  padding: 8px 16px;
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  border-radius: 24px;
  border: ${(props) => (props.border ? props.border : 'none')};
  margin: 10px;
  width: 100%;
  &:focus {
    border: none;
    box-shadow: 0 0 0 2px #0d2329;
  }
`;

export const DarkButton = styled('button')`
  background-color: #0d2329;
  color: #fff;
  width: 70%;
  border-radius: 24px;
  font-size: 16px;
  padding: 8px;
  border: none;
  margin: 10px;
  &:hover {
    background-color: #4dd467;
    color: #0d2329;
    cursor: pointer;
  }
`;

export const LightButton = styled('button')`
  background-color: #fff;
  color: #0d2329;
  width: 70%;
  border-radius: 24px;
  font-size: 16px;
  padding: 8px;
  border: none;
  margin: 10px;
  &:hover {
    color: #fff;
    background-color: #4dd467;
    cursor: pointer;
  }
`;

export const Text = styled('p')`
  color: ${(props) => (props.color ? props.color : 'inherit')};
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  text-align: justify;
`;
