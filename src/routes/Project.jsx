import {Navigate, useNavigate} from "react-router-dom";
import ProjectRegister from "../components/ProjectRegister/ProjectRegister";
import {useDbContext} from "../context/dbContext";
import {useAuthContext} from "../context/AuthContext";

const Project = () => {
  const navigate = useNavigate();
  const {getSelectedFarm} = useDbContext();
  const {user} = useAuthContext();

  const handleRegisterFarm = () => {
    navigate("register-farm");
  };

  const handleSelectFarm = async (id) => {
    await getSelectedFarm(id);
    navigate("/farm");
  };

  if (user.displayName == null) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <ProjectRegister
      handleRegisterFarm={handleRegisterFarm}
      handleSelectFarm={handleSelectFarm}
    />
  );
};

export default Project;
