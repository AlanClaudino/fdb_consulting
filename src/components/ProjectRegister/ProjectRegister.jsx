import {PlusIcon} from "lucide-react";
import {
  Background,
  Container,
  ProjectButton,
  ProjectContainer,
  Text,
  TextHero,
} from "./styled";
import {useAuthContext} from "../../context/AuthContext";
import {useDbContext} from "../../context/dbContext";
import {useEffect, useState} from "react";
import {GiBarn} from "react-icons/gi";
import loading from "../../assets/loading.gif";

// eslint-disable-next-line react/prop-types
const ProjectRegister = ({handleRegisterFarm, handleSelectFarm}) => {
  const {user} = useAuthContext();
  const {getUserFarms, userFarms} = useDbContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getFarms = async () => {
      await getUserFarms(user.uid);
      setIsLoading(false);
    };
    getFarms();
  }, [getUserFarms, user]);

  return (
    <Background>
      {isLoading ? (
        <Container>
          <img
            src={loading}
            alt="Teste"
            style={{
              maxWidth: "500px",
              height: "auto",
            }}
          />
        </Container>
      ) : (
        <Container>
          <TextHero>Start planning for your next season.</TextHero>
          <ProjectContainer>
            <ProjectButton onClick={handleRegisterFarm} color="#4ebe46">
              <PlusIcon size={60} />
              <Text>Add a Farm</Text>
            </ProjectButton>
            {userFarms &&
              userFarms.map((farm) => {
                return (
                  <ProjectButton
                    key={farm.id}
                    onClick={() => handleSelectFarm(farm.id)}
                  >
                    <GiBarn style={{height: "60px", width: "auto"}} />
                    <Text>{farm.farmName}</Text>
                  </ProjectButton>
                );
              })}
          </ProjectContainer>
        </Container>
      )}
    </Background>
  );
};

export default ProjectRegister;
