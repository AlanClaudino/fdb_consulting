import {useNavigate} from "react-router-dom";
import ProjectRegister from "../components/ProjectRegister/ProjectRegister";

const Project = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("register-farm");
  };
  return <ProjectRegister handleClick={handleClick} />;
};

export default Project;
