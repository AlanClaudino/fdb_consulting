import {PlusIcon} from "lucide-react";
import {
  Background,
  Container,
  ProjectButton,
  ProjectContainer,
  Text,
  TextHero,
} from "./styled";

// eslint-disable-next-line react/prop-types
const ProjectRegister = ({handleClick}) => {
  return (
    <Background>
      <Container>
        <TextHero>Start planning for your next season.</TextHero>
        <ProjectContainer>
          <ProjectButton onClick={handleClick}>
            <PlusIcon size={60} />
            <Text>Add a Farm</Text>
          </ProjectButton>
        </ProjectContainer>
      </Container>
    </Background>
  );
};

export default ProjectRegister;
