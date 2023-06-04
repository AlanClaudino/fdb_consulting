import {SubTitle, Title} from "../styled/styled";
import {
  DashContainer,
  DashboardOptions,
  IconWrapper,
  InventoryIcon,
  ProcessIcon,
  Section,
  WorkShopIcon,
  WorkersIcon,
} from "./styled";

const DashboardView = () => {
  return (
    <DashContainer>
      <Title style={{textAlign: "start"}}>Dashboard</Title>
      <Section>
        <DashboardOptions>
          <IconWrapper background="#226F54">
            <ProcessIcon />
          </IconWrapper>
          <SubTitle>Workflow</SubTitle>
        </DashboardOptions>
        <DashboardOptions>
          <IconWrapper background="#3B2C35">
            <WorkShopIcon />
          </IconWrapper>
          <SubTitle>Machinery</SubTitle>
        </DashboardOptions>
        <DashboardOptions>
          <IconWrapper background="#db3a34">
            <InventoryIcon />
          </IconWrapper>
          <SubTitle>Inventory</SubTitle>
        </DashboardOptions>
        <DashboardOptions>
          <IconWrapper background="#00CC66">
            <WorkersIcon />
          </IconWrapper>
          <SubTitle>Workers</SubTitle>
        </DashboardOptions>
      </Section>
    </DashContainer>
  );
};

export default DashboardView;
