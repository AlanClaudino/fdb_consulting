import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header.jsx";

const Home = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "70px auto",
        minHeight: "100svh",
      }}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
