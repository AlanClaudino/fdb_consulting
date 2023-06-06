import {DarkButton, InnerSection, Section, WorflowContainer} from "./styled";
import {Text, Title} from "../styled/styled";
import {Edit2Icon, PlusIcon} from "lucide-react";

const WorkflowView = () => {
  return (
    <WorflowContainer>
      <Title style={{textAlign: "start"}}>Production Systems</Title>
      <section>
        <DarkButton>
          <PlusIcon size={16} /> Create new Workflow
        </DarkButton>
        <Section style={{backgroundColor: "#0d2329", color: "#f4f4f4"}}>
          <InnerSection>
            <Text style={{fontWeight: "bolder"}}>Id</Text>
          </InnerSection>
          <InnerSection>
            <Text style={{fontWeight: "bolder"}}>Crop</Text>
          </InnerSection>
          <InnerSection>
            <Text style={{fontWeight: "bolder"}}>Description</Text>
          </InnerSection>
          <InnerSection>
            <Text style={{fontWeight: "bolder"}}>Manage</Text>
          </InnerSection>
        </Section>
        <Section>
          <InnerSection>
            <Text>001</Text>
          </InnerSection>
          <InnerSection>
            <Text>Soybean</Text>
          </InnerSection>
          <InnerSection>
            <Text>No Tillage</Text>
          </InnerSection>
          <InnerSection>
            <Edit2Icon />
          </InnerSection>
        </Section>
      </section>
    </WorflowContainer>
  );
};

export default WorkflowView;
