import WorkflowView from "../components/Workflow/WorkflowView";
import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDbContext} from "../context/dbContext";

const Workflow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");

  const formRef = useRef();
  const cropRef = useRef();
  const descriptionRef = useRef();

  const {createWorkflow, getSelectedWorkflow, deleteWorkflow} = useDbContext();
  const navigate = useNavigate();

  const handleNewWorkflow = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    formRef.current.reset();
    setIsOpen(false);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newWorkflow = {
      crop: cropRef.current.value,
      description: descriptionRef.current.value,
      subProcesses: [],
      subCount: 0,
    };

    try {
      await createWorkflow(newWorkflow);
      navigate("../edit-workflow");
    } catch (error) {
      console.log(error.message);
      setError("Failed to register workflow. Please, try again.");
    }
  };

  const handleEdit = async (id) => {
    await getSelectedWorkflow(id);
    navigate("../edit-workflow");
  };

  const handleDelete = async (id) => {
    try {
      await deleteWorkflow(id);
    } catch (error) {
      console.log(error);
      setError("Failed to delete the workflow. Please, try again.");
    }
  };

  return (
    <WorkflowView
      isOpen={isOpen}
      handleClose={handleClose}
      handleNewWorkflow={handleNewWorkflow}
      formRef={formRef}
      cropRef={cropRef}
      descriptionRef={descriptionRef}
      handleSubmit={handleSubmit}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      error={error}
    />
  );
};

export default Workflow;
