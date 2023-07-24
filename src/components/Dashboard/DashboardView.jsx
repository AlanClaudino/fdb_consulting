import {useState, useEffect} from "react";
import loading from "../../assets/loading.gif";
import {useNavigate} from "react-router-dom";
import {SubTitle, Text, Title} from "../styledold/styled";
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
} from "./styled";

const DashboardView = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, []);

  return (
    <>
      {isLoading ? (
        <div>
          <img
            src={loading}
            alt="Teste"
            style={{
              maxWidth: "500px",
              height: "auto",
            }}
          />
        </div>
      ) : (
        <DashContainer>
          <Title style={{textAlign: "start"}}>Dashboard</Title>
          <section>
            <SubTitle style={{textAlign: "start", fontSize: "28px"}}>
              Manager
            </SubTitle>
            <Section>
              <DashboardOptions onClick={() => navigate("workflow")}>
                <IconWrapper background="#226F54">
                  <ProcessIcon />
                </IconWrapper>
                <SubTitle>Workflow</SubTitle>
              </DashboardOptions>
              <DashboardOptions onClick={() => navigate("machinery")}>
                <IconWrapper background="#3B2C35">
                  <WorkShopIcon />
                </IconWrapper>
                <SubTitle>Machinery</SubTitle>
              </DashboardOptions>
              <DashboardOptions onClick={() => navigate("inventory")}>
                <IconWrapper background="#db3a34">
                  <InventoryIcon />
                </IconWrapper>
                <SubTitle>Inventory</SubTitle>
              </DashboardOptions>
              <DashboardOptions onClick={() => navigate("workers")}>
                <IconWrapper background="#65AFFF">
                  <WorkersIcon />
                </IconWrapper>
                <SubTitle>Workers</SubTitle>
              </DashboardOptions>
              <DashboardOptions>
                <IconWrapper background="#00CC66">
                  <BudgetIcon />
                </IconWrapper>
                <SubTitle>New Budget</SubTitle>
              </DashboardOptions>
            </Section>
          </section>
          <section>
            <SubTitle style={{textAlign: "start", fontSize: "28px"}}>
              Budgets
            </SubTitle>
            <Section style={{flexDirection: "column", alignItems: "start"}}>
              <Text>
                {`No Budgets created yet. Let's start planning for the next season.`}
              </Text>
              <DarkButton>Create new budget</DarkButton>
            </Section>
            <Section></Section>
          </section>
        </DashContainer>
      )}
    </>
  );
};

export default DashboardView;
