import {useNavigate} from "react-router-dom";
import ProjectRegister from "../components/ProjectRegister/ProjectRegister";
import {useDbContext} from "../context/dbContext";
import {useEffect} from "react";
import {useAuthContext} from "../context/AuthContext";

const Project = () => {
  const navigate = useNavigate();
  const {getSelectedFarm} = useDbContext();
  const {user} = useAuthContext();

  useEffect(() => {
    if (user.displayName == null) {
      navigate("/profile");
    }
  }, []);

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
