import {XSquareIcon} from "lucide-react";
import {SubTitle, Text, Title} from "../styledold/styled";
import {
  ErrorMessage,
  ActivitiesContainer,
  ClearButton,
  EditWorkflowContainer,
  ItemContainer,
  ProcessesContainer,
  SaveButton,
  WorkflowContainer,
  SuccessMessage,
  CloseButton,
  StyledLink,
  Overlay,
  ConfirmContainer,
} from "./styled";
import {useEffect, useState} from "react";
import {useDbContext} from "../../context/dbContext";
import {useNavigate} from "react-router-dom";
import AddInfo from "./components/AddInfo";
import TreeItem from "./components/TreeItem";
import loading from "../../assets/loading.gif";

const EditWorkflowView = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const {workflow, updateWorkflow} = useDbContext();
  const [subProcesses, setSubProcesses] = useState(workflow.subProcesses);
  const [subCount, setSubCount] = useState(workflow.subCount);
  const [crop, setCrop] = useState(workflow.crop);

  const [subProcessControl, setsubProcessControl] = useState([]);
  const [viewSubProcesses, setViewSubProcesses] = useState(true);

  const [wasEdited, setWasEdited] = useState(false);
  const [confirmView, setConfirmView] = useState(false);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const newControl = [];
    subProcesses.forEach((item) => {
      newControl.push({
        activitiesIsOpen: false,
        id: item.id,
      });
    });
    setsubProcessControl(newControl);
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const newSubprocessSubmit = (info) => {
    if (message) setMessage("");

    const newSubpro = {
      id: info.inputOne,
      description: info.inputTwo,
      activities: [],
      activitiesNumber: 0,
    };
    const newSubProcesses = [...subProcesses, newSubpro];
    setSubProcesses(newSubProcesses);

    const newControl = [...subProcessControl];
    newControl.push({
      ActivitiesIsOpen: false,
      id: info.inputOne,
    });
    setsubProcessControl(newControl);
    setSubCount(subCount + 1);
    setWasEdited(true);
  };

  const newActivitySubmit = (info, id) => {
    const newActivity = {
      id: info.inputOne,
      description: info.inputTwo,
    };

    const data = subProcesses.map((subPro) => {
      if (subPro.id == id) {
        subPro.activities.push(newActivity);
        subPro.activitiesNumber++;

        return subPro;
      }
      return subPro;
    });
    setSubProcesses(data);
    setWasEdited(true);
  };

  const viewActivities = (id) => {
    const newControl = subProcessControl.map((subProc) => {
      if (subProc.id == id) {
        return {...subProc, activitiesIsOpen: !subProc.activitiesIsOpen};
      }

      return subProc;
    });

    setsubProcessControl(newControl);
  };

  const editActivity = (inputOne, inputTwo, subProcId, ActvId) => {
    const data = subProcesses.map((subProc) => {
      if (subProc.id == subProcId) {
        subProc.activities.map((activity) => {
          if (activity.id == ActvId) {
            activity.description = inputTwo;
          }
          return activity;
        });
      }

      return subProc;
    });

    setSubProcesses(data);
    setWasEdited(true);
  };

  const editSubprocess = (inputOne, inputTwo, id) => {
    const data = subProcesses.map((subProc) => {
      if (subProc.id == id) {
        return {...subProc, description: inputTwo};
      }
      return subProc;
    });
    setSubProcesses(data);
    setWasEdited(true);
  };

  const editCrop = (inputOne, inputTwo) => {
    setCrop(inputTwo);
    setWasEdited(true);
  };

  const deleteSubprocess = (id) => {
    if (message) setMessage("");
    const newSubProcesses = subProcesses.filter((item) => item.id != id);
    setSubProcesses(newSubProcesses);
    setWasEdited(true);
  };

  const deleteActivity = (subProcId, ActvId) => {
    const data = subProcesses.map((subProc) => {
      if (subProc.id == subProcId) {
        const newActivities = subProc.activities.filter(
          (activity) => activity.id != ActvId
        );
        return {...subProc, activities: newActivities};
      }
      return subProc;
    });

    setSubProcesses(data);
    setWasEdited(true);
  };

  const handleSave = async () => {
    setMessage("");
    const info = {
      crop: crop,
      subProcesses: subProcesses,
      subCount: subCount,
    };
    try {
      const update = await updateWorkflow(info);
      setMessage(update);
      setWasEdited(false);
    } catch (error) {
      setError(error);
    }
  };

  const handleCancel = () => {
    if (!wasEdited) navigate("/farm/workflow");
    setConfirmView(true);
  };

  const handleLeave = () => {
    navigate("/farm/workflow");
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
        <EditWorkflowContainer>
          <Title style={{textAlign: "start"}}>Production Systems</Title>
          <ItemContainer style={{border: "none"}}>
            <SubTitle style={{fontSize: "20px"}}>Desc:</SubTitle>
            <Text>{workflow.description}</Text>
          </ItemContainer>
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
              <span style={{lineHeight: "1.5"}}>
                {message} Click here to return to{" "}
                <StyledLink to={"/farm/workflow"}>
                  Workflow Dashboard
                </StyledLink>
                .
              </span>
              <CloseButton onClick={() => setMessage("")}>
                <XSquareIcon />
              </CloseButton>
            </SuccessMessage>
          )}
          <WorkflowContainer>
            <TreeItem
              isClickable={true}
              handleClick={() => setViewSubProcesses(!viewSubProcesses)}
              category={"Crop"}
              itemOne={"001"}
              itemTwo={crop}
              handleEditButton={editCrop}
            />
            {viewSubProcesses && (
              <ProcessesContainer>
                {subProcesses?.map((subProcess) => {
                  return (
                    <section key={subProcess.id}>
                      <TreeItem
                        isClickable={true}
                        category={"Sub-Process"}
                        itemOne={subProcess.id}
                        itemTwo={subProcess.description}
                        handleClick={() => viewActivities(subProcess.id)}
                        handleEditButton={(inputOne, inputTwo) =>
                          editSubprocess(inputOne, inputTwo, subProcess.id)
                        }
                        handleDeleteButton={() =>
                          deleteSubprocess(subProcess.id)
                        }
                      />
                      {subProcessControl.reduce((id, subProc) => {
                        if (id == subProc.id) {
                          return subProc.activitiesIsOpen;
                        }
                        return id;
                      }, subProcess.id) && (
                        <ActivitiesContainer>
                          {subProcess.activities.map((activity) => {
                            return (
                              <>
                                <TreeItem
                                  item={activity}
                                  key={activity.id}
                                  isClickable={false}
                                  category={"Activity"}
                                  itemOne={activity.id}
                                  itemTwo={activity.description}
                                  handleEditButton={(inputOne, inputTwo) =>
                                    editActivity(
                                      inputOne,
                                      inputTwo,
                                      subProcess.id,
                                      activity.id
                                    )
                                  }
                                  handleDeleteButton={() =>
                                    deleteActivity(subProcess.id, activity.id)
                                  }
                                />
                              </>
                            );
                          })}

                          <AddInfo
                            handleSubmit={(info) =>
                              newActivitySubmit(info, subProcess.id)
                            }
                            firstInputLabel="Id"
                            secondInputLabel="Description"
                            buttonText="Add new activity"
                            valueOne={String(
                              subProcess.activitiesNumber + 1
                            ).padStart(3, "0")}
                          />
                        </ActivitiesContainer>
                      )}
                    </section>
                  );
                })}
                <AddInfo
                  handleSubmit={newSubprocessSubmit}
                  firstInputLabel="Id"
                  secondInputLabel="Description"
                  buttonText="Add new sub-process"
                  valueOne={String(subCount + 1).padStart(3, "0")}
                />
              </ProcessesContainer>
            )}
          </WorkflowContainer>
          <ItemContainer>
            <SaveButton onClick={handleSave}>Save</SaveButton>
            <ClearButton onClick={handleCancel}>Cancel</ClearButton>
          </ItemContainer>
        </EditWorkflowContainer>
      )}
      {confirmView && (
        <Overlay>
          <ConfirmContainer>
            <Text>
              Your changes have not been saved and will be lost. Do you want to
              leave this page?
            </Text>
            <ItemContainer>
              <SaveButton onClick={() => handleLeave()}>Leave</SaveButton>
              <ClearButton onClick={() => setConfirmView(false)}>
                Cancel
              </ClearButton>
            </ItemContainer>
          </ConfirmContainer>
        </Overlay>
      )}
    </>
  );
};

export default EditWorkflowView;
