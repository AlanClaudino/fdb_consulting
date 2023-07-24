import {useEffect, useState} from "react";
import {useDbContext} from "../../context/dbContext";
import {StyledLink, Text, Title} from "../styledold/styled";
import {
  AddButton,
  ClearButton,
  CloseButton,
  ConfirmContainer,
  InventoryItemContainer,
  ErrorMessage,
  GroupTitle,
  ItemContainer,
  InventoryContainer,
  NewGroupContainer,
  Overlay,
  SuccessMessage,
  SaveButton,
} from "./styled";

import loading from "../../assets/loading.gif";
import {XSquareIcon} from "lucide-react";
import {useNavigate} from "react-router-dom";

import AddGroup from "./components/AddGroup/AddGroup";
import GroupItem from "./components/GroupItem/GroupItem";
import AddInventoryItem from "./components/AddInventoryItem/AddInventoryItem";
import InventoryItem from "./components/InventoryItem/InventoryItem";

const InventoryView = () => {
  const {
    createInventoryGroup,
    getFarmInventory,
    farmInventory,
    updateInventoryGroup,
    deleteInventoryGroup,
  } = useDbContext();

  const navigate = useNavigate();

  const [farmCurrentInventory, setFarmCurrentInventory] = useState([]);
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
    const getInventory = async () => {
      await getFarmInventory();
      setIsLoading(false);
    };
    getInventory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let newFarmInventory;

    if (farmInventory) {
      newFarmInventory = farmInventory.map((group) => {
        const newgroup = {...group, isOpen: false};
        return newgroup;
      });
    }
    setFarmCurrentInventory(newFarmInventory);
  }, [farmInventory]);

  const handleNewGroup = async (name) => {
    const info = {
      description: name,
      items: [],
      numberItems: 0,
    };

    try {
      setGroupIsLoading(true);
      await createInventoryGroup(info);
      setGroupIsLoading(false);
    } catch (error) {
      setError("Failed to register new Inventory Group. Please, try again.");
    }
  };

  const addNewItem = (info, id) => {
    const newItem = {
      id: info.valueOne,
      description: info.valueTwo,
      unit: info.valueThree,
      cost: info.valueFour,
    };

    const data = farmCurrentInventory.map((group) => {
      if (group.id === id) {
        const newGroup = {...group};
        newGroup.items.push(newItem);
        newGroup.numberItems++;
        return newGroup;
      }
      return group;
    });

    if (!edited.includes(id)) {
      const newEdit = [...edited, id];
      setEdited(newEdit);
    }

    setFarmCurrentInventory(data);
  };

  const handleGroupExpand = (evt, id) => {
    evt.preventDefault();

    const data = farmCurrentInventory.map((group) => {
      if (group.id === id) {
        const newGroup = {...group, isOpen: !group.isOpen};
        return newGroup;
      }
      return group;
    });
    setFarmCurrentInventory(data);
  };

  const editGroupDesc = (value, id) => {
    const data = farmCurrentInventory.map((group) => {
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

    setFarmCurrentInventory(data);
  };

  const editItemInfo = (info, id, itemId) => {
    const data = farmCurrentInventory.map((group) => {
      if (group.id === id) {
        const editItem = group.items.map((item) => {
          if (item.id == itemId) {
            item.id = itemId;
            item.description = info.valueTwo;
            item.unit = info.valueThree;
            item.cost = info.valueFour;
          }
          return item;
        });
        const newGroup = {...group, items: editItem};
        return newGroup;
      }

      return group;
    });

    if (!edited.includes(id)) {
      const newEdit = [...edited, id];
      setEdited(newEdit);
    }
    setFarmCurrentInventory(data);
  };

  const handleEquipDelete = (id, itemId) => {
    const data = farmCurrentInventory.map((group) => {
      if (group.id === id) {
        const editItem = group.items.filter((item) => item.id != itemId);
        const newGroup = {...group, items: editItem};
        return newGroup;
      }
      return group;
    });

    if (!edited.includes(id)) {
      const newEdit = [...edited, id];
      setEdited(newEdit);
    }
    setFarmCurrentInventory(data);
  };

  const handleDelete = async (id) => {
    setDeleteId(id);
    setConfirmView(true);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await deleteInventoryGroup(deleteId);
    setIsLoading(false);
    setConfirmView(false);
    setConfirmDelete(false);
    setLeavePage(false);
  };

  const handleSave = async () => {
    try {
      farmCurrentInventory.forEach((group) => {
        if (edited.includes(group.id)) {
          // eslint-disable-next-line no-unused-vars
          const {isOpen, id, ...groupInfo} = group;
          updateInventoryGroup(groupInfo, group.id);
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
        <InventoryContainer>
          <Title style={{alignSelf: "start"}}>Inventory</Title>
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
            <Text>Register new Inventory Group</Text>
            <AddGroup handleForm={handleNewGroup} />
          </NewGroupContainer>
          <InventoryItemContainer style={{height: "100%", padding: "0"}}>
            <GroupTitle>
              <Text></Text>
              <Text>Id</Text>
              <Text>Desc.</Text>
              <Text>Unit</Text>
              <Text>Price</Text>
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
                {farmCurrentInventory && farmCurrentInventory.length > 0 ? (
                  farmCurrentInventory.map((group) => {
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
                            {group.items.map((equip) => {
                              return (
                                <InventoryItem
                                  key={`${equip.id}-${equip.description}`}
                                  inputOne={equip.id}
                                  inputTwo={equip.description}
                                  inputThree={equip.unit}
                                  inputFour={equip.cost}
                                  handleEdit={(info) =>
                                    editItemInfo(info, group.id, equip.id)
                                  }
                                  handleEquipDelete={() =>
                                    handleEquipDelete(group.id, equip.id)
                                  }
                                />
                              );
                            })}
                            <AddInventoryItem
                              inputOne={String(group.numberItems + 1).padStart(
                                3,
                                "0"
                              )}
                              handleForm={(info) => addNewItem(info, group.id)}
                            />
                          </>
                        )}
                      </section>
                    );
                  })
                ) : (
                  <Text style={{padding: "20px"}}>
                    No items registered yet. Add your first to start building
                    your budgets.
                  </Text>
                )}
              </>
            )}
          </InventoryItemContainer>
          <ItemContainer>
            <AddButton onClick={handleSave}>Save</AddButton>
            <ClearButton onClick={handleCancel}>Cancel</ClearButton>
          </ItemContainer>
        </InventoryContainer>
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
                  This group will be permanently deleted and can not be
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

export default InventoryView;
