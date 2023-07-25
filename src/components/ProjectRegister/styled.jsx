import styled from "styled-components";
import background from "../../assets/FarmBackground.svg";

export const Background = styled("div")`
  height: 100%;
  width: 100vw;
  background: url(${background}) center;
  background-size: cover;
`;

export const Container = styled("div")`
  max-width: 980px;
  margin: 0 auto;
  height: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProjectContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  gap: 20px;
`;

export const TextHero = styled("p")`
  color: white;
  font-size: 40px;
  font-family: "Poppins", sans-serif;
  align-self: start;
`;

export const Text = styled("p")`
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

export const ProjectButton = styled("div")`
  background-color: #f4f4f4;
  color: ${(props) => (props.color ? props.color : "#0d2d33")};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 50px 10px;
  height: 250px;
  width: 250px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.background ? props.background : "#ececec"};
  }
`;
