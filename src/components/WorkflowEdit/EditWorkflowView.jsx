import {XSquareIcon} from "lucide-react";
import {SubTitle, Text, Title} from "../styled/styled";
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
} from "./styled";
import {useEffect, useState} from "react";
import {useDbContext} from "../../context/dbContext";
import {useNavigate} from "react-router-dom";
import AddInfo from "./components/AddInfo";
import TreeItem from "./components/TreeItem";

const EditWorkflowView = () => {
  const {workflow, updateWorkflow} = useDbContext();
  const navigate = useNavigate();

  const [subProcesses, setSubProcesses] = useState(workflow.subProcesses);
  const [viewSubProcesses, setViewSubProcesses] = useState(
    workflow.subProcesses
  );
  const [crop, setCrop] = useState(workflow.crop);
  const [subProcessControl, setsubProcessControl] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const newControl = [];
    subProcesses.forEach(() => {
      newControl.push({
        ActivitiesIsOpen: false,
      });
    });
    setsubProcessControl(newControl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const newHandleSubmit = (e, info) => {
    if (message) setMessage("");

    const newSubpro = {
      id: info.inputOne,
      description: info.inputTwo,
      activities: [],
    };
    const newSubProcesses = [...subProcesses, newSubpro];
    setSubProcesses(newSubProcesses);

    const newControl = [...subProcessControl];
    newControl.push({
      ActivitiesIsOpen: false,
    });
    setsubProcessControl(newControl);
  };

  const newHandleActivitySubmit = (evt, info, index) => {
    const newActivity = {
      id: info.inputOne,
      description: info.inputTwo,
    };

    const data = [...subProcesses];
    data[index].activities.push(newActivity);
    setSubProcesses(data);
  };

  const editActivity = (inputOne, inputTwo, index, actIndex) => {
    const data = [...subProcesses];
    data[index].activities[actIndex].id = inputOne;
    data[index].activities[actIndex].description = inputTwo;
    setSubProcesses(data);
  };

  const editSubprocess = (inputOne, inputTwo, index) => {
    const data = [...subProcesses];
    data[index].id = inputOne;
    data[index].description = inputTwo;
    setSubProcesses(data);
  };

  const editCrop = (inputOne, inputTwo) => {
    setCrop(inputTwo);
  };

  const handleActivityList = (index) => {
    const newControl = [...subProcessControl];
    newControl[index].ActivitiesIsOpen = !newControl[index].ActivitiesIsOpen;
    setsubProcessControl(newControl);
  };

  const handleSave = async () => {
    setMessage("");
    const info = {
      crop: crop,
      subProcesses: subProcesses,
    };
    try {
      const update = await updateWorkflow(info);
      setMessage(update);
    } catch (error) {
      setError(error);
    }
  };

  const handleCancel = async () => {
    navigate("/farm/workflow");
  };

  return (
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
          <div style={{lineHeight: "1.5"}}>
            {message} Click here to return to{" "}
            <StyledLink to={"/farm/workflow"}>Workflow Dashboard</StyledLink>.
          </div>
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
          handleForm={editCrop}
        />
        {viewSubProcesses && (
          <ProcessesContainer>
            {subProcesses?.map((item, index) => {
              return (
                <section key={item.id}>
                  <TreeItem
                    isClickable={true}
                    category={"Sub-Process"}
                    itemOne={item.id}
                    itemTwo={item.description}
                    handleClick={() => handleActivityList(index)}
                    handleForm={(inputOne, inputTwo) =>
                      editSubprocess(inputOne, inputTwo, index)
                    }
                  />
                  {subProcessControl[index]?.ActivitiesIsOpen && (
                    <ActivitiesContainer>
                      {item.activities.map((activity, actIndex) => {
                        return (
                          <>
                            <TreeItem
                              item={activity}
                              key={activity.id}
                              isClickable={false}
                              category={"Activity"}
                              itemOne={activity.id}
                              itemTwo={activity.description}
                              handleForm={(inputOne, inputTwo) =>
                                editActivity(
                                  inputOne,
                                  inputTwo,
                                  index,
                                  actIndex
                                )
                              }
                            />
                          </>
                        );
                      })}

                      <AddInfo
                        handleSubmit={newHandleActivitySubmit}
                        firstInputLabel="Id"
                        secondInputLabel="Description"
                        buttonText="Add new activity"
                        index={index}
                      />
                    </ActivitiesContainer>
                  )}
                </section>
              );
            })}
            <AddInfo
              handleSubmit={newHandleSubmit}
              firstInputLabel="Id"
              secondInputLabel="Description"
              buttonText="Add new sub-process"
              index=""
            />
          </ProcessesContainer>
        )}
      </WorkflowContainer>
      <ItemContainer>
        <SaveButton onClick={handleSave}>Save</SaveButton>
        <ClearButton onClick={handleCancel}>Cancel</ClearButton>
      </ItemContainer>
    </EditWorkflowContainer>
  );
};

export default EditWorkflowView;
