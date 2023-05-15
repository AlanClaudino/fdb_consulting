import { CalendarDaysIcon } from 'lucide-react';
import { StyledSidebar, StyledSidebarItem, StyledSidebarText } from './styled';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledSidebarItem>
        <CalendarDaysIcon color="#4dd467" />
        <StyledSidebarText color="white">Dashboard</StyledSidebarText>
      </StyledSidebarItem>
      <StyledSidebarItem>
        <CalendarDaysIcon color="#4dd467" />
        <StyledSidebarText color="white">Dashboard</StyledSidebarText>
      </StyledSidebarItem>
      <StyledSidebarItem>
        <CalendarDaysIcon color="#4dd467" />
        <StyledSidebarText color="white">Dashboard</StyledSidebarText>
      </StyledSidebarItem>
    </StyledSidebar>
  );
};

export default Sidebar;
