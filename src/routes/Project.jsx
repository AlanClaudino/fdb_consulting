import {useNavigate} from "react-router-dom";
import ProjectRegister from "../components/ProjectRegister/ProjectRegister";
import {useDbContext} from "../context/dbContext";

const Project = () => {
  const navigate = useNavigate();
  const {getSelectedFarm} = useDbContext();

  const handleRegisterFarm = () => {
    navigate("register-farm");
  };

  const handleSelectFarm = async (id) => {
    await getSelectedFarm(id);
    navigate("/farm");
  };

  return (
    <ProjectRegister
      handleRegisterFarm={handleRegisterFarm}
      handleSelectFarm={handleSelectFarm}
    />
  );
};

export default Project;
