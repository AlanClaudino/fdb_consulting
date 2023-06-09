import {ChevronRightSquare, MinusSquareIcon} from "lucide-react";
import {
  ErrorMessage,
  SubTitle,
  SuccessMessage,
  Text,
  Title,
} from "../styled/styled";
import {
  ActivitiesContainer,
  AddButton,
  CategoryText,
  ClearButton,
  CropContainer,
  EditWorkflowContainer,
  ItemContainer,
  ProcessesContainer,
  SaveButton,
  SubprocessContainer,
  WorkflowContainer,
} from "./styled";
import {useEffect, useRef, useState} from "react";
import {useDbContext} from "../../context/dbContext";
import AddMore from "./components/AddMore";
import AddMoreActivity from "./components/AddMoreActivity";

const EditWorkflowView = () => {
  const {workflow, updateWorkflow} = useDbContext();
  const [isNewSubOpen, setisNewSubOpen] = useState(false);
  const [subProcesses, setSubProcesses] = useState(workflow.subProcesses);
  const [subProcessControl, setsubProcessControl] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const newControl = [];
    subProcesses.forEach(() => {
      newControl.push({
        ActivitiesIsOpen: false,
        isOpen: false,
        id: "",
        description: "",
      });
    });
    setsubProcessControl(newControl);
  }, []);

  const subProcessesFormRef = useRef();
  const subProcessesIdRef = useRef();
  const subProcessesDescRef = useRef();

  const subHandleSubmit = (e) => {
    e.preventDefault();
    const newSubpro = {
      id: subProcessesIdRef.current.value,
      description: subProcessesDescRef.current.value,
      activities: [],
    };
    const newSubProcesses = [...subProcesses, newSubpro];
    setSubProcesses(newSubProcesses);
    subProcessesFormRef.current.reset();

    const newControl = [...subProcessControl];
    newControl.push({
      ActivitiesIsOpen: false,
      isOpen: false,
      id: "",
      description: "",
    });
    setsubProcessControl(newControl);
  };

  const handleFormChange = (index, event) => {
    console.log(index, event.target.value, event.target.name);
    let data = [...subProcessControl];
    data[index][event.target.name] = event.target.value;
    setsubProcessControl(data);
  };

  const handleActivitySubmit = (index, evt) => {
    evt.preventDefault();
    const newActivity = {
      id: subProcessControl[index].id,
      description: subProcessControl[index].description,
    };

    const data = [...subProcesses];
    data[index].activities.push(newActivity);
    setSubProcesses(data);

    const control = [...subProcessControl];
    control[index].id = "";
    control[index].description = "";
    setsubProcessControl(control);
  };

  const handleNewSub = () => {
    setisNewSubOpen(!isNewSubOpen);
  };

  const handleActivityList = (index) => {
    const newControl = [...subProcessControl];
    newControl[index].ActivitiesIsOpen = !newControl[index].ActivitiesIsOpen;
    setsubProcessControl(newControl);
  };

  const handleNewActivity = (index) => {
    const newControl = [...subProcessControl];
    newControl[index].isOpen = !newControl[index].isOpen;
    setsubProcessControl(newControl);
  };

  const handleSave = async () => {
    const info = {
      subProcesses: subProcesses,
    };
    console.log("INFO", info);
    try {
      console.log("Estive aqui");
      const update = await updateWorkflow(info);
      console.log(update);
      setMessage(update);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <EditWorkflowContainer>
      <Title style={{textAlign: "start"}}>Production Systems</Title>
      <ItemContainer style={{border: "none"}}>
        <SubTitle style={{fontSize: "20px"}}>Desc:</SubTitle>
        <Text>{workflow.description}</Text>
      </ItemContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {message && <SuccessMessage>{message}</SuccessMessage>}
      <WorkflowContainer>
        <CropContainer>
          <MinusSquareIcon size={16} />
          <CategoryText>Crop</CategoryText>
          <Text>{workflow.crop}</Text>
        </CropContainer>
        <ProcessesContainer>
          {subProcesses.map((item, index) => {
            return (
              <section key={item.id}>
                <ItemContainer>
                  <SubprocessContainer>
                    <AddButton onClick={() => handleActivityList(index)}>
                      <ChevronRightSquare size={16} />
                      <CategoryText>Sub-Process</CategoryText>
                    </AddButton>
                  </SubprocessContainer>
                  <Text>{`${item.id} - ${item.description}`}</Text>
                </ItemContainer>
                {subProcessControl[index]?.ActivitiesIsOpen && (
                  <ActivitiesContainer>
                    {item.activities.map((activity) => {
                      return (
                        <ItemContainer key={activity.id}>
                          <MinusSquareIcon size={16} />
                          <CategoryText>Activity</CategoryText>
                          <Text>{`${activity.id} - ${activity.description}`}</Text>
                        </ItemContainer>
                      );
                    })}
                    <AddMoreActivity
                      isOpen={subProcessControl[index].isOpen}
                      handleIsOpen={() => handleNewActivity(index)}
                      handleSubmit={(evt) => handleActivitySubmit(index, evt)}
                      firstInputValue={subProcessControl[index].id}
                      firstInputOnChange={(evt) => handleFormChange(index, evt)}
                      firstInputLabel={"Id: "}
                      secondInputValue={subProcessControl[index].description}
                      secondInputOnChange={(evt) =>
                        handleFormChange(index, evt)
                      }
                      secondInputName={"description"}
                      firstInputName={"id"}
                      secondInputLabel={"Description: "}
                      buttonText={"New Activity"}
                    />
                  </ActivitiesContainer>
                )}
              </section>
            );
          })}
          <AddMore
            isOpen={isNewSubOpen}
            handleIsOpen={handleNewSub}
            handleSubmit={subHandleSubmit}
            formRef={subProcessesFormRef}
            firstInputRef={subProcessesIdRef}
            firstInputLabel={"Id: "}
            secondInputRef={subProcessesDescRef}
            secondInputLabel={"Description: "}
            buttonText={"New Sub-process"}
          />
        </ProcessesContainer>
      </WorkflowContainer>
      <ItemContainer>
        <SaveButton onClick={handleSave}>Save</SaveButton>
        <ClearButton>Cancel</ClearButton>
      </ItemContainer>
    </EditWorkflowContainer>
  );
};

export default EditWorkflowView;
