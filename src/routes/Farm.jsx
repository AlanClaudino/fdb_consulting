import {Outlet, useNavigate} from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import {RowContainer} from "../components/styled/styled.jsx";
import {useDbContext} from "../context/dbContext.jsx";
import {useEffect} from "react";

const Farm = () => {
  const {farm} = useDbContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (farm == null) {
      navigate("/");
    }
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "200px auto",
      }}
    >
      <Sidebar />
      <RowContainer style={{padding: "15px", background: "#fafafa"}}>
        <Outlet />
      </RowContainer>
    </div>
  );
};

export default Farm;
