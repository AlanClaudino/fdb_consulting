/* eslint-disable react/prop-types */
import {
  SelectContainer,
  SideBudgetIcon,
  SideCalendarIcon,
  SideHomeIcon,
  SideInventoryIcon,
  SideMachineryIcon,
  SideWorkerIcon,
  SideWorkflowIcon,
  StyledSidebar,
  StyledSidebarItem,
  StyledSidebarText,
  StyledFarmSelected,
  StyledArrowDown,
  SelectFarmButton,
  SelectButton,
  SelectMenu,
  StyledSelecteText,
} from "./styled";

import {useDbContext} from "../../context/dbContext";
import {useNavigate} from "react-router-dom";

const Sidebar = ({
  isOpen,
  handleFarmSelect,
  handleMenuSelect,
  farmMenuRef,
  selectButtonRef,
}) => {
  const {userFarms, farm} = useDbContext();
  const navigate = useNavigate();

  return (
    <StyledSidebar>
      <SelectContainer>
        <SelectButton onClick={handleMenuSelect} ref={selectButtonRef}>
          <StyledFarmSelected>{farm && farm.farmName}</StyledFarmSelected>
          <StyledArrowDown size={16} />
        </SelectButton>
      </SelectContainer>
      <StyledSidebarItem onClick={() => navigate("/")}>
        <SideHomeIcon />
        <StyledSidebarText>Home</StyledSidebarText>
      </StyledSidebarItem>
      <StyledSidebarItem onClick={() => navigate("/farm")}>
        <SideCalendarIcon />
        <StyledSidebarText>Dashboard</StyledSidebarText>
      </StyledSidebarItem>
      <StyledSidebarItem onClick={() => navigate("/farm/workflow")}>
        <SideWorkflowIcon />
        <StyledSidebarText>Workflow</StyledSidebarText>
      </StyledSidebarItem>
      <StyledSidebarItem onClick={() => navigate("/farm/machinery")}>
        <SideMachineryIcon />
        <StyledSidebarText>Machinery</StyledSidebarText>
      </StyledSidebarItem>
      <StyledSidebarItem onClick={() => navigate("/farm/inventory")}>
        <SideInventoryIcon />
        <StyledSidebarText>Inventory</StyledSidebarText>
      </StyledSidebarItem>
      <StyledSidebarItem onClick={() => navigate("/farm/workers")}>
        <SideWorkerIcon />
        <StyledSidebarText>Workers</StyledSidebarText>
      </StyledSidebarItem>
      <StyledSidebarItem>
        <SideBudgetIcon />
        <StyledSidebarText>Budgets</StyledSidebarText>
      </StyledSidebarItem>
      <SelectMenu ref={farmMenuRef}>
        {isOpen &&
          userFarms &&
          userFarms.map((farmItem) => {
            return (
              <SelectFarmButton
                key={farmItem.id}
                onClick={() => handleFarmSelect(farmItem.id)}
              >
                <StyledSelecteText>{farmItem.farmName}</StyledSelecteText>
              </SelectFarmButton>
            );
          })}
      </SelectMenu>
    </StyledSidebar>
  );
};

export default Sidebar;
