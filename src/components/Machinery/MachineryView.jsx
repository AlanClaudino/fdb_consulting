import {useEffect, useState} from "react";
import loading from "../../assets/loading.gif";
import {
  CloseButton,
  EquipmentContainer,
  ErrorMessage,
  GroupContainer,
  MachineryViewContainer,
  SuccessMessage,
} from "./styled";
import {Title} from "../styled/styled";
import {XSquareIcon} from "lucide-react";
import TreeItem from "./components/TreeItem";
import AddInfo from "./components/AddInfo";
import {useDbContext} from "../../context/dbContext";

const MachineryView = () => {
  const {farmEquip, createEquipGroup, getFarmEquipments} = useDbContext();

  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [farmEquipments, setFarmEquipments] = useState([]);

  useEffect(() => {
    if (farmEquip) setFarmEquipments(farmEquip);
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, [farmEquip]);

  // const addNewGroup = ()=> {

  // }

  return (
    <>
      {isLoading ? (
        <div>
          <img
            src={loading}
            alt="Teste"
            style={{
              maxWidth: "500px",
              height: "auto",
            }}
          />
        </div>
      ) : (
        <MachineryViewContainer>
          <Title style={{textAlign: "start"}}>Machinery & Equipment</Title>
          {message && (
            <SuccessMessage>
              <div>{message}</div>
              <CloseButton onClick={() => setMessage("")}>
                <XSquareIcon />
              </CloseButton>
            </SuccessMessage>
          )}
          {error && (
            <ErrorMessage>
              {error}
              <CloseButton onClick={() => setError("")}>
                <XSquareIcon />
              </CloseButton>
            </ErrorMessage>
          )}
          <EquipmentContainer>
            <TreeItem isClickable={true} category={"Equipments"} />
            <GroupContainer>
              {farmEquipments.map((group) => {
                <TreeItem
                  isClickable={true}
                  category="Group"
                  itemOne={group.id}
                  itemTwo={group.description}
                />;
              })}
              <AddInfo
                handleSubmit={() => {}}
                firstInputLabel="Id"
                secondInputLabel="Description"
                buttonText="Add new equipment group"
                valueOne={String("0").padStart(3, "0")}
              />
            </GroupContainer>
          </EquipmentContainer>
        </MachineryViewContainer>
      )}
    </>
  );
};

export default MachineryView;
