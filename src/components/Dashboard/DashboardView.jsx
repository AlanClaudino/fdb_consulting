import { useNavigate } from 'react-router-dom';
import { SubTitle, Text, Title } from '../styled/styled';
import {
  DashContainer,
  DashboardOptions,
  IconWrapper,
  InventoryIcon,
  ProcessIcon,
  Section,
  WorkShopIcon,
  WorkersIcon,
  DarkButton,
  BudgetIcon,
} from './styled';

const DashboardView = () => {
  const navigate = useNavigate();

  return (
    <DashContainer>
      <Title style={{ textAlign: 'start' }}>Dashboard</Title>
      <section>
        <SubTitle style={{ textAlign: 'start', fontSize: '28px' }}>
          Manager
        </SubTitle>
        <Section>
          <DashboardOptions onClick={() => navigate('workflow')}>
            <IconWrapper background='#226F54'>
              <ProcessIcon />
            </IconWrapper>
            <SubTitle>Workflow</SubTitle>
          </DashboardOptions>
          <DashboardOptions>
            <IconWrapper background='#3B2C35'>
              <WorkShopIcon />
            </IconWrapper>
            <SubTitle>Machinery</SubTitle>
          </DashboardOptions>
          <DashboardOptions>
            <IconWrapper background='#db3a34'>
              <InventoryIcon />
            </IconWrapper>
            <SubTitle>Inventory</SubTitle>
          </DashboardOptions>
          <DashboardOptions>
            <IconWrapper background='#65AFFF'>
              <WorkersIcon />
            </IconWrapper>
            <SubTitle>Workers</SubTitle>
          </DashboardOptions>
          <DashboardOptions>
            <IconWrapper background='#00CC66'>
              <BudgetIcon />
            </IconWrapper>
            <SubTitle>New Budget</SubTitle>
          </DashboardOptions>
        </Section>
      </section>
      <section>
        <SubTitle style={{ textAlign: 'start', fontSize: '28px' }}>
          Budgets
        </SubTitle>
        <Section style={{ flexDirection: 'column', alignItems: 'start' }}>
          <Text>
            No Budgets created yet. Let's start planning for the next season.
          </Text>
          <DarkButton>Create new budget</DarkButton>
        </Section>
        <Section></Section>
      </section>
    </DashContainer>
  );
};

export default DashboardView;
