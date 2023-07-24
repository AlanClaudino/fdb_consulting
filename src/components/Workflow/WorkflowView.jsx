/* eslint-disable react/prop-types */
import {
  ClearButton,
  DarkButton,
  DeleteButton,
  EditButton,
  Form,
  FormContainer,
  FormSection,
  InnerSection,
  Input,
  Label,
  Overlay,
  SaveButton,
  TableContainer,
  TableData,
  TableRow,
  TableTitle,
  WorflowContainer,
} from "./styled";
import {ErrorMessage, SubTitle, Text, Title} from "../styled/styled";
import {Edit2Icon, PlusIcon, Trash2} from "lucide-react";
import {useDbContext} from "../../context/dbContext";
import {useEffect, useState} from "react";
import loading from "../../assets/loading.gif";

const WorkflowView = ({
  isOpen,
  handleNewWorkflow,
  handleClose,
  handleSubmit,
  formRef,
  cropRef,
  descriptionRef,
  error,
  handleEdit,
  handleDelete,
}) => {
  const {farmWorkflows, getFarmWorkflows, farm} = useDbContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getWorkflows = async () => {
      await getFarmWorkflows(farm.id);
      setIsLoading(false);
    };
    getWorkflows();
  }, [farm, getFarmWorkflows]);

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
        <WorflowContainer>
          <Title style={{textAlign: "start"}}>Production Systems</Title>
          <section>
            <DarkButton onClick={handleNewWorkflow}>
              <PlusIcon size={16} /> Create new Workflow
            </DarkButton>
          </section>
          <TableContainer>
            <thead>
              <TableTitle>
                <InnerSection>
                  <Text>Id</Text>
                </InnerSection>
                <InnerSection>
                  <Text>Crop</Text>
                </InnerSection>
                <InnerSection>
                  <Text>Description</Text>
                </InnerSection>
                <InnerSection>
                  <Text>Manage</Text>
                </InnerSection>
              </TableTitle>
            </thead>
            <tbody>
              {!farmWorkflows.length ? (
                <TableRow>
                  <TableData style={{justifyContent: "center"}}>
                    <Text>
                      No workflows yet. Start building your budget creating one.
                    </Text>
                  </TableData>
                </TableRow>
              ) : (
                farmWorkflows.map((workflow) => {
                  return (
                    <TableRow key={workflow.id}>
                      <TableData>
                        <Text>{workflow.id}</Text>
                      </TableData>
                      <TableData>
                        <Text>{workflow.crop}</Text>
                      </TableData>
                      <TableData>
                        <Text>{workflow.description}</Text>
                      </TableData>
                      <TableData>
                        <EditButton onClick={() => handleEdit(workflow.id)}>
                          <Edit2Icon size={18} />
                        </EditButton>
                        <DeleteButton onClick={() => handleDelete(workflow.id)}>
                          <Trash2 size={18} />
                        </DeleteButton>
                      </TableData>
                    </TableRow>
                  );
                })
              )}
            </tbody>
          </TableContainer>
        </WorflowContainer>
      )}
      {isOpen && (
        <Overlay>
          <FormContainer>
            <SubTitle>New Workflow</SubTitle>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Form onSubmit={handleSubmit} ref={formRef}>
              <FormSection>
                <Label>Crop</Label>
                <Input ref={cropRef} required />
              </FormSection>
              <FormSection>
                <Label>Description</Label>
                <Input ref={descriptionRef} required />
              </FormSection>
              <FormSection
                style={{textAlign: "center", backgroundColor: "#fafafa"}}
              >
                <SaveButton type="submit">Create</SaveButton>
                <ClearButton onClick={handleClose}>Cancel</ClearButton>
              </FormSection>
            </Form>
          </FormContainer>
        </Overlay>
      )}
    </>
  );
};

export default WorkflowView;
