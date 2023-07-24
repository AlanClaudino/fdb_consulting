import {useEffect, useState} from "react";
import {useDbContext} from "../../context/dbContext";
import {StyledLink, Text, Title} from "../styledold/styled";
import AddGroup from "./components/AddGroup/AddGroup";
import {
  AddButton,
  ClearButton,
  CloseButton,
  ConfirmContainer,
  EquipContainer,
  ErrorMessage,
  GroupTitle,
  ItemContainer,
  MachineryContainer,
  NewGroupContainer,
  Overlay,
  SuccessMessage,
  SaveButton,
} from "./styled";
import GroupItem from "./components/GroupItem/GroupItem";
import loading from "../../assets/loading.gif";
import AddEquip from "./components/AddEquip/AddEquip";
import EquipItem from "./components/EquipItem/EquipItem";
import {XSquareIcon} from "lucide-react";
import {useNavigate} from "react-router-dom";

const MachineryView = () => {
  const {
    createEquipGroup,
    getFarmEquipments,
    farmEquip,
    updateEquipGroup,
    deleteEquipmentGroup,
  } = useDbContext();

  const navigate = useNavigate();

  const [farmEquipmentes, setFarmEquipmentes] = useState([]);
  const [edited, setEdited] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [groupIsLoading, setGroupIsLoading] = useState(false);
  const [confirmView, setConfirmView] = useState(false);
  const [leavePage, setLeavePage] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteId, setDeleteId] = useState();

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getEquip = async () => {
      await getFarmEquipments();
      setIsLoading(false);
    };
    getEquip();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    if (!edited.includes(id)) {
      const newEdit = [...edited, id];
      setEdited(newEdit);
    }

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

  const editGroupDesc = (value, id) => {
    const data = farmEquipmentes.map((group) => {
      if (group.id === id) {
        const newGroup = {...group, description: value};
        return newGroup;
      }
      return group;
    });

    if (!edited.includes(id)) {
      const newEdit = [...edited, id];
      setEdited(newEdit);
    }

    setFarmEquipmentes(data);
  };

  const editEquipInfo = (info, id, equipId) => {
    const data = farmEquipmentes.map((group) => {
      if (group.id === id) {
        const editEquip = group.equipment.map((equip) => {
          if (equip.id == equipId) {
            equip.id = equipId;
            equip.description = info.valueTwo;
            equip.unit = info.valueThree;
            equip.cost = info.valueFour;
          }
          return equip;
        });
        const newGroup = {...group, equipment: editEquip};
        return newGroup;
      }

      return group;
    });

    if (!edited.includes(id)) {
      const newEdit = [...edited, id];
      setEdited(newEdit);
    }
    setFarmEquipmentes(data);
  };

  const handleEquipDelete = (id, equipId) => {
    const data = farmEquipmentes.map((group) => {
      if (group.id === id) {
        const editEquip = group.equipment.filter(
          (equip) => equip.id != equipId
        );
        const newGroup = {...group, equipment: editEquip};
        return newGroup;
      }
      return group;
    });

    if (!edited.includes(id)) {
      const newEdit = [...edited, id];
      setEdited(newEdit);
    }
    setFarmEquipmentes(data);
  };

  const handleDelete = async (id) => {
    setDeleteId(id);
    setConfirmView(true);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await deleteEquipmentGroup(deleteId);
    setIsLoading(false);
    setConfirmView(false);
    setConfirmDelete(false);
    setLeavePage(false);
  };

  const handleSave = async () => {
    try {
      farmEquipmentes.forEach((group) => {
        if (edited.includes(group.id)) {
          // eslint-disable-next-line no-unused-vars
          const {isOpen, id, ...groupInfo} = group;
          updateEquipGroup(groupInfo, group.id);
        }
      });
      setEdited([]);
      setMessage("Changes saved successfully. Click here to return to");
    } catch (error) {
      console.log(error);
      setError("Unable to save changes. Please, try again.");
    }
  };

  const handleLeave = () => {
    navigate("/farm");
  };

  const handleCancel = () => {
    if (edited.length == 0) navigate("/farm");
    setConfirmView(true);
    setLeavePage(true);
  };

  const handleCancelModal = () => {
    setConfirmView(false);
    setConfirmDelete(false);
    setLeavePage(false);
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
          {error && (
            <ErrorMessage>
              {error}
              <CloseButton onClick={() => setError("")}>
                <XSquareIcon />
              </CloseButton>
            </ErrorMessage>
          )}
          {message && (
            <SuccessMessage>
              <span>
                {message} <StyledLink to={"/farm"}>Dashboard.</StyledLink>
              </span>
              <CloseButton onClick={() => setMessage("")}>
                <XSquareIcon />
              </CloseButton>
            </SuccessMessage>
          )}
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
                          handleForm={(info) => editGroupDesc(info, group.id)}
                          handleGroupDelete={() => handleDelete(group.id)}
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
                                  handleEdit={(info) =>
                                    editEquipInfo(info, group.id, equip.id)
                                  }
                                  handleEquipDelete={() =>
                                    handleEquipDelete(group.id, equip.id)
                                  }
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
                  <Text style={{padding: "20px"}}>
                    No equipment registered yet. Add your first to start
                    building your budgets.
                  </Text>
                )}
              </>
            )}
          </EquipContainer>
          <ItemContainer>
            <AddButton onClick={handleSave}>Save</AddButton>
            <ClearButton onClick={handleCancel}>Cancel</ClearButton>
          </ItemContainer>
        </MachineryContainer>
      )}
      {confirmView && (
        <Overlay>
          <ConfirmContainer>
            {leavePage && (
              <>
                <Text style={{lineHeight: "1.5"}}>
                  Your changes have not been saved and will be lost. Do you want
                  to leave this page?
                </Text>
                <ItemContainer>
                  <SaveButton onClick={() => handleLeave()}>Leave</SaveButton>
                  <ClearButton onClick={handleCancelModal}>Cancel</ClearButton>
                </ItemContainer>
              </>
            )}
            {confirmDelete && (
              <>
                <Text style={{lineHeight: "1.5"}}>
                  This group will be permanently delete and can not be
                  recovered. Do you want to delete it?
                </Text>
                <ItemContainer>
                  <SaveButton onClick={handleConfirmDelete}>
                    Confirm Delete
                  </SaveButton>
                  <ClearButton onClick={handleCancelModal}>Cancel</ClearButton>
                </ItemContainer>
              </>
            )}
          </ConfirmContainer>
        </Overlay>
      )}
    </>
  );
};

export default MachineryView;
