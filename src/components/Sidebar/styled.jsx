import styled from "styled-components";

export const StyledSidebar = styled("div")`
  height: 100%;
  background-color: #0d2d33;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const StyledSidebarText = styled("p")`
  color: ${(props) => (props.color ? props.color : "inherit")};
  font-size: 16px;
  font-family: "Lato", sans-serif;
  text-align: justify;
  text-transform: uppercase;
`;

export const StyledSidebarItem = styled("section")`
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid #0d2329;
  display: flex;
  align-items: center;
  gap: 10px;
`;
