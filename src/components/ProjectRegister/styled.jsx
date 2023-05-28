import styled from "styled-components";

export const Background = styled("div")`
  height: 100svh;
  width: 100vw;
  background: linear-gradient(183deg, #0d2d33 50%, #f4f4f4 50%);
`;

export const Container = styled("div")`
  max-width: 980px;
  margin: 0 auto;
  height: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProjectContainer = styled("div")`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  padding: 10px;
`;

export const TextHero = styled("p")`
  color: white;
  font-size: 40px;
  font-family: "Poppins", sans-serif;
`;

export const Text = styled("p")`
  color: #0d2d33;
  font-size: 30px;
  font-family: "Poppins", sans-serif;
`;

export const ProjectButton = styled("div")`
  background-color: #f4f4f4;
  color: #0d2d33;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 250px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
`;
