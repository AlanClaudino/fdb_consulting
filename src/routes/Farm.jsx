import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import {RowContainer} from "../components/styled/styled.jsx";

const Farm = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "200px auto",
      }}
    >
      <Sidebar />
      <RowContainer style={{padding: "15px", overflow: "auto"}}>
        <Outlet />
      </RowContainer>
    </div>
  );
};

export default Farm;
