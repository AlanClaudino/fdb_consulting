import {useEffect, useState} from "react";
import {useDbContext} from "../../context/dbContext";
import {Text, Title} from "../styled/styled";
import AddGroup from "./components/AddGroup";
import {
  EquipContainer,
  ErrorMessage,
  GroupTitle,
  MachineryContainer,
  NewGroupContainer,
} from "./styled";
import GroupItem from "./components/GroupItem";
import loading from "../../assets/loading.gif";
import AddEquip from "./components/AddEquip/AddEquip";
import EquipItem from "./components/EquipItem/EquipItem";

const MachineryView = () => {
  const {createEquipGroup, getFarmEquipments, farmEquip} = useDbContext();

  const [farmEquipmentes, setFarmEquipmentes] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [groupIsLoading, setGroupIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getEquip = async () => {
      await getFarmEquipments();
      setIsLoading(false);
    };
    getEquip();
  }, []);

  useEffect(() => {
    let newFarmEquipments;

    if (farmEquip) {
      newFarmEquipments = farmEquip.map((group) => {
        const newgroup = {...group, isOpen: false};
        return newgroup;
      });
    }
    setFarmEquipmentes(newFarmEquipments);
  }, [farmEquip]);

  const handleNewGroup = async (name) => {
    const info = {
      description: name,
      equipment: [],
      numberEquip: 0,
    };

    try {
      setGroupIsLoading(true);
      await createEquipGroup(info);
      setGroupIsLoading(false);
    } catch (error) {
      setError(
        "Failed to register new Machinery & Equipment Group. Please, try again."
      );
    }
  };

  const addNewEquip = (info, id) => {
    const newEquip = {
      id: info.valueOne,
      description: info.valueTwo,
      unit: info.valueThree,
      cost: info.valueFour,
    };

    const data = farmEquipmentes.map((group) => {
      if (group.id === id) {
        const newGroup = {...group};
        newGroup.equipment.push(newEquip);
        newGroup.numberEquip++;
        return newGroup;
      }
      return group;
    });

    setFarmEquipmentes(data);
  };

  const handleGroupExpand = (evt, id) => {
    evt.preventDefault();

    const data = farmEquipmentes.map((group) => {
      if (group.id === id) {
        const newGroup = {...group, isOpen: !group.isOpen};
        return newGroup;
      }
      return group;
    });
    setFarmEquipmentes(data);
  };

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
        <MachineryContainer>
          <Title style={{alignSelf: "start"}}>Machinery & Equipments</Title>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <NewGroupContainer>
            <Text>Register new Machinery & Equipment Group</Text>
            <AddGroup handleForm={handleNewGroup} />
          </NewGroupContainer>
          <EquipContainer style={{height: "100%", padding: "0"}}>
            <GroupTitle>
              <Text></Text>
              <Text>Id</Text>
              <Text>Desc.</Text>
              <Text>Unit</Text>
              <Text>Cost</Text>
              <Text></Text>
            </GroupTitle>
            {groupIsLoading ? (
              <div style={{alignSelf: "center"}}>
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
              <>
                {farmEquipmentes && farmEquipmentes.length > 0 ? (
                  farmEquipmentes.map((group) => {
                    return (
                      <section key={group.id} style={{padding: "0 15px"}}>
                        <GroupItem
                          value={group.description}
                          isOpen={group.isOpen}
                          handleClick={(evt) =>
                            handleGroupExpand(evt, group.id)
                          }
                          id={group.id}
                        />
                        {group.isOpen && (
                          <>
                            {group.equipment.map((equip) => {
                              return (
                                <EquipItem
                                  key={`${equip.id}-${equip.description}`}
                                  inputOne={equip.id}
                                  inputTwo={equip.description}
                                  inputThree={equip.unit}
                                  inputFour={equip.cost}
                                />
                              );
                            })}
                            <AddEquip
                              inputOne={String(group.numberEquip + 1).padStart(
                                3,
                                "0"
                              )}
                              handleForm={(info) => addNewEquip(info, group.id)}
                            />
                          </>
                        )}
                      </section>
                    );
                  })
                ) : (
                  <Text>
                    No equipment registered yet. Add your first to start
                    building your budgets.
                  </Text>
                )}
              </>
            )}
          </EquipContainer>
        </MachineryContainer>
      )}
    </>
  );
};

export default MachineryView;