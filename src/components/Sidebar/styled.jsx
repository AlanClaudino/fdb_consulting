import styled from "styled-components";
import {CalendarDaysIcon, HomeIcon, ClipboardList} from "lucide-react";
import {GiFarmTractor, GiFertilizerBag} from "react-icons/gi";
import {IoManSharp} from "react-icons/io5";
import {FaMoneyCheckAlt} from "react-icons/fa";
import {ChevronDown} from "lucide-react";

export const SideCalendarIcon = styled(CalendarDaysIcon)`
  color: #4dd467;
`;

export const SideHomeIcon = styled(HomeIcon)`
  color: #4dd467;
`;

export const SideWorkflowIcon = styled(ClipboardList)`
  color: #4dd467;
`;

export const SideMachineryIcon = styled(GiFarmTractor)`
  height: 24px;
  width: auto;
  color: #4dd467;
`;

export const SideInventoryIcon = styled(GiFertilizerBag)`
  height: 24px;
  width: auto;
  color: #4dd467;
`;

export const SideWorkerIcon = styled(IoManSharp)`
  height: 24px;
  width: auto;
  color: #4dd467;
`;

export const SideBudgetIcon = styled(FaMoneyCheckAlt)`
  height: 24px;
  width: auto;
  color: #4dd467;
`;

export const StyledSidebar = styled("div")`
  position: relative;
  height: 100%;
  background-color: #0d2d33;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const StyledSidebarText = styled("p")`
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-size: 16px;
  font-family: "Lato", sans-serif;
  text-align: justify;
  text-transform: capitalize;
`;

export const StyledSidebarItem = styled("section")`
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid #0d2329;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    background-color: #0f363c;
    cursor: pointer;
  }
`;

export const SelectContainer = styled("section")`
  padding: 15px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  overflow: hidden;
`;

export const StyledFarmSelected = styled("p")`
  color: white;
  padding: 5px 0;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  border: none;
  text-align: start;
  word-wrap: wrap;
`;

export const StyledArrowDown = styled(ChevronDown)`
  color: #fff;
`;

export const SelectButton = styled("button")`
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid #4dd467;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 5px;
  margin: 0;
  &:hover {
    background-color: #0f363c;
    cursor: pointer;
  }
`;

export const SelectFarmButton = styled("button")`
  background: none;
  border: none;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 5px;
  &:hover {
    background-color: #0d2329;
    cursor: pointer;
  }
`;

export const SelectMenu = styled("div")`
  position: absolute;
  left: 185px;
  top: 30px;
  border-radius: 5px;
  width: max-content;
  overflow: hidden;
  background-color: #0f363c;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const StyledSelecteText = styled("p")`
  color: white;
  padding: 5px;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  border: none;
  text-align: start;
`;
