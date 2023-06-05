import {Outlet, useNavigate} from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import {RowContainer} from "../components/styled/styled.jsx";
import {useDbContext} from "../context/dbContext.jsx";
import {useEffect} from "react";
import {useState} from "react";
import {useRef} from "react";

// isOpen, handleFarmSelect, handleMenuSelect;

const Farm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {farm, getSelectedFarm} = useDbContext();
  const navigate = useNavigate();
  const farmMenuRef = useRef();
  const selectButtonRef = useRef();

  const handleMenuSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleFarmSelect = (farmId) => {
    getSelectedFarm(farmId);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (
        !farmMenuRef.current.contains(e.target) &&
        !selectButtonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

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
      <Sidebar
        isOpen={isOpen}
        handleMenuSelect={handleMenuSelect}
        farmMenuRef={farmMenuRef}
        selectButtonRef={selectButtonRef}
        handleFarmSelect={handleFarmSelect}
      />
      <RowContainer style={{padding: "15px", background: "#fafafa"}}>
        <Outlet />
      </RowContainer>
    </div>
  );
};

export default Farm;
