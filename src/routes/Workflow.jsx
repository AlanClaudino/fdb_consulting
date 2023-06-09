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

  const {createWorkflow, getSelectedWorkflow} = useDbContext();
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
    };

    try {
      await createWorkflow(newWorkflow);
      navigate("../edit-workflow");
    } catch (error) {
      console.log(error.message);
      setError("Failed to register Farm. Please, try again.");
    }
  };

  const handleEdit = async (id) => {
    console.log("ID", id);
    await getSelectedWorkflow(id);
    navigate("../edit-workflow");
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
      error={error}
    />
  );
};

export default Workflow;
