import {useNavigate} from "react-router-dom";
import ProjectRegister from "../components/ProjectRegister/ProjectRegister";

const Project = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("Farm");
  };
  return <ProjectRegister handleClick={handleClick} />;
};

export default Project;
