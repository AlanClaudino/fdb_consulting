import styled from "styled-components";
import {User} from "lucide-react";

export const UserMenu = styled("div")`
  position: absolute;
  right: 20px;
  top: 50px;
  background: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 5px;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const StyledHeader = styled("header")`
  width: 100%;
  background-color: #0d2329;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px 5px 10px;
`;

export const MenuButton = styled("button")`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: ${(props) => (props.color ? props.color : "none")};
    cursor: pointer;
  }
`;

export const UserIcon = styled(User)`
  border-radius: 50%;
  border: 2px solid white;
`;

export const LogoText = styled("p")`
  font-family: "DM Sans", sans-serif;
  font-size: 21px;
  color: white;
`;
