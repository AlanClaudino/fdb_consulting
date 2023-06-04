import styled from "styled-components";
import {GiFarmTractor, GiFertilizerBag} from "react-icons/gi";
import {FaClipboardList} from "react-icons/fa";
import {IoManSharp} from "react-icons/io5";

export const DashContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  height: 100%;
`;

export const Section = styled("section")`
  padding: 10px 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
`;

export const DashboardOptions = styled("div")`
  background-color: ${(props) =>
    props.background ? props.background : "#fff"};
  color: ${(props) => (props.color ? props.color : "#0d2d33")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 5px;
  height: 200px;
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

export const ProcessIcon = styled(FaClipboardList)`
  height: 90px;
  width: auto;
  color: #fff;
`;

export const WorkShopIcon = styled(GiFarmTractor)`
  height: 90px;
  width: auto;
  color: #fff;
`;

export const InventoryIcon = styled(GiFertilizerBag)`
  height: 90px;
  width: auto;
  color: #fff;
`;
export const WorkersIcon = styled(IoManSharp)`
  height: 90px;
  width: auto;
  color: #fff;
`;

export const IconWrapper = styled("div")`
  background-color: ${(props) =>
    props.background ? props.background : "#fff"};
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
