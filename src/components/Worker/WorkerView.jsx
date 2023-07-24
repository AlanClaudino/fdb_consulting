import {useEffect, useState} from "react";
import {useDbContext} from "../../context/dbContext";
import {StyledLink, Text, Title} from "../styled/styled";
import AddGroup from "./components/AddGroup/AddGroup";
import {
  AddButton,
  ClearButton,
  CloseButton,
  ConfirmContainer,
  WorkerContainer,
  ErrorMessage,
  GroupTitle,
  ItemContainer,
  EmployeesContainer,
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

const WorkerView = () => {
  const {
    createWorkersGroup,
    updateWorkersGroup,
    deleteWorkerGroup,
    getFarmWorkers,
    farmWorkers,
  } = useDbContext();

  const navigate = useNavigate();

  const [workersFarm, setWorkersFarm] = useState([]);
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
    const getWorkers = async () => {
      await getFarmWorkers();
      setIsLoading(false);
    };
    getWorkers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let newFarmWorkers;

    if (farmWorkers) {
      newFarmWorkers = farmWorkers.map((group) => {
        const newgroup = {...group, isOpen: false};
        return newgroup;
      });
    }
    setWorkersFarm(newFarmWorkers);
  }, [farmWorkers]);

  const handleNewGroup = async (name) => {
    const info = {
      description: name,
      workers: [],
      numberWorkers: 0,
    };

    try {
      setGroupIsLoading(true);
      await createWorkersGroup(info);
      setGroupIsLoading(false);
    } catch (error) {
      setError("Failed to register new Worker Group. Please, try again.");
    }
  };

  const addNewWorker = (info, id) => {
    const newWorker = {
      id: info.valueOne,
      description: info.valueTwo,
      unit: info.valueThree,
      cost: info.valueFour,
    };

    const data = workersFarm.map((group) => {
      if (group.id === id) {
        const newGroup = {...group};
        newGroup.workers.push(newWorker);
        newGroup.numberWorkers++;
        return newGroup;
      }
      return group;
    });

    if (!edited.includes(id)) {
      const newEdit = [...edited, id];
      setEdited(newEdit);
    }

    setWorkersFarm(data);
  };

  const handleGroupExpand = (evt, id) => {
    evt.preventDefault();

    const data = workersFarm.map((group) => {
      if (group.id === id) {
        const newGroup = {...group, isOpen: !group.isOpen};
        return newGroup;
      }
      return group;
    });
    setWorkersFarm(data);
  };

  const editGroupDesc = (value, id) => {
    const data = workersFarm.map((group) => {
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

    setWorkersFarm(data);
  };

  const editEquipInfo = (info, id, workerId) => {
    const data = workersFarm.map((group) => {
      if (group.id === id) {
        const editEquip = group.workers.map((worker) => {
          if (worker.id == workerId) {
            worker.id = workerId;
            worker.description = info.valueTwo;
            worker.unit = info.valueThree;
            worker.cost = info.valueFour;
          }
          return worker;
        });
        const newGroup = {...group, workers: editEquip};
        return newGroup;
      }

      return group;
    });

    if (!edited.includes(id)) {
      const newEdit = [...edited, id];
      setEdited(newEdit);
    }
    setWorkersFarm(data);
  };

  const handleEquipDelete = (id, workerId) => {
    const data = workersFarm.map((group) => {
      if (group.id === id) {
        const editWorker = group.workers.filter(
          (worker) => worker.id != workerId
        );
        const newGroup = {...group, workers: editWorker};
        return newGroup;
      }
      return group;
    });

    if (!edited.includes(id)) {
      const newEdit = [...edited, id];
      setEdited(newEdit);
    }
    setWorkersFarm(data);
  };

  const handleDelete = async (id) => {
    setDeleteId(id);
    setConfirmView(true);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await deleteWorkerGroup(deleteId);
    setIsLoading(false);
    setConfirmView(false);
    setConfirmDelete(false);
    setLeavePage(false);
  };

  const handleSave = async () => {
    try {
      workersFarm.forEach((group) => {
        if (edited.includes(group.id)) {
          // eslint-disable-next-line no-unused-vars
          const {isOpen, id, ...groupInfo} = group;
          updateWorkersGroup(groupInfo, group.id);
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
        <EmployeesContainer>
          <Title style={{alignSelf: "start"}}>Farm Employees</Title>
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
            <Text>Register new Employee Group</Text>
            <AddGroup handleForm={handleNewGroup} />
          </NewGroupContainer>
          <WorkerContainer style={{height: "100%", padding: "0"}}>
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
                {workersFarm && workersFarm.length > 0 ? (
                  workersFarm.map((group) => {
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
                            {group.workers.map((worker) => {
                              return (
                                <EquipItem
                                  key={`${worker.id}-${worker.description}`}
                                  inputOne={worker.id}
                                  inputTwo={worker.description}
                                  inputThree={worker.unit}
                                  inputFour={worker.cost}
                                  handleEdit={(info) =>
                                    editEquipInfo(info, group.id, worker.id)
                                  }
                                  handleEquipDelete={() =>
                                    handleEquipDelete(group.id, worker.id)
                                  }
                                />
                              );
                            })}
                            <AddEquip
                              inputOne={String(
                                group.numberWorkers + 1
                              ).padStart(3, "0")}
                              handleForm={(info) =>
                                addNewWorker(info, group.id)
                              }
                            />
                          </>
                        )}
                      </section>
                    );
                  })
                ) : (
                  <Text style={{padding: "20px"}}>
                    No Employees registered yet. Add your first to start
                    building your budgets.
                  </Text>
                )}
              </>
            )}
          </WorkerContainer>
          <ItemContainer>
            <AddButton onClick={handleSave}>Save</AddButton>
            <ClearButton onClick={handleCancel}>Cancel</ClearButton>
          </ItemContainer>
        </EmployeesContainer>
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

export default WorkerView;
