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
  TableTitle,
  WorflowContainer,
} from "./styled";
import {ErrorMessage, SubTitle, Text, Title} from "../styled/styled";
import {Edit2Icon, PlusIcon, Trash2} from "lucide-react";
import {useDbContext} from "../../context/dbContext";

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
}) => {
  const {farmWorkflows} = useDbContext();

  return (
    <>
      <WorflowContainer>
        <Title style={{textAlign: "start"}}>Production Systems</Title>
        <section>
          <DarkButton onClick={handleNewWorkflow}>
            <PlusIcon size={16} /> Create new Workflow
          </DarkButton>
        </section>
        <TableContainer>
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
          {!farmWorkflows.length ? (
            <TableData>
              <InnerSection style={{justifyContent: "center"}}>
                <Text>
                  No workflows yet. Start building your budget creating one.
                </Text>
              </InnerSection>
            </TableData>
          ) : (
            farmWorkflows.map((workflow) => {
              return (
                <TableData key={workflow.id}>
                  <InnerSection>
                    <Text>{workflow.id}</Text>
                  </InnerSection>
                  <InnerSection>
                    <Text>{workflow.crop}</Text>
                  </InnerSection>
                  <InnerSection>
                    <Text>{workflow.description}</Text>
                  </InnerSection>
                  <InnerSection>
                    <EditButton onClick={handleEdit}>
                      <Edit2Icon size={18} />
                    </EditButton>
                    <DeleteButton>
                      <Trash2 size={18} />
                    </DeleteButton>
                  </InnerSection>
                </TableData>
              );
            })
          )}
        </TableContainer>
      </WorflowContainer>
      {isOpen && (
        <Overlay>
          <FormContainer>
            <SubTitle>New Workflow</SubTitle>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Form onSubmit={handleSubmit} ref={formRef}>
              <FormSection>
                <Label>Crop</Label>
                <Input ref={cropRef} />
              </FormSection>
              <FormSection>
                <Label>Description</Label>
                <Input ref={descriptionRef} />
              </FormSection>
              <FormSection
                style={{textAlign: "center", backgroundColor: "#fafafa"}}
              >
                <SaveButton>Create</SaveButton>
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
