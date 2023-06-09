import styled from "styled-components";

export const EditWorkflowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const WorkflowContainer = styled.section`
  padding: 15px;
  border: 1px solid #0d2329;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const CropContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 8px;
`;

export const ProcessesContainer = styled.section`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`;

export const ActivitiesContainer = styled.section`
  padding-left: 30px;
  display: flex;
  flex-direction: column;
`;

export const ItemContainer = styled.div`
  border-top: 1px solid #0d2329;
  display: flex;
  align-items: center;
  padding: 8px 0;
  gap: 10px;
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SubprocessContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const FormSection = styled.section`
  display: flex;
  align-items: center;
`;

export const CategoryText = styled.h3`
  min-width: 170px;
  color: #0d2329;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  text-align: start;
  font-weight: 600;
`;

export const AddButton = styled.button`
  border: none;
  background-color: inherit;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    cursor: pointer;
    color: #4dd467;
  }
`;

export const Input = styled("input")`
  color: #0d2329;
  max-width: 300px;
  font-size: 16px;
  padding: 5px 8px;
  font-family: "Lato", sans-serif;
  border: 2px solid rgba(13, 35, 41, 0.3);
  border-radius: 5px;
  width: 100%;
  &:focus {
    /* border: 2px solid #4dd467; */
    border: 2px solid rgba(13, 35, 41, 0.7);
  }
  &:focus-visible {
    outline: none;
  }
  &::placeholder {
    color: rgba(13, 35, 41, 0.75);
  }
`;

export const Label = styled("label")`
  color: #0d2329;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  padding: 5px;
  display: block;
  font-weight: bolder;
`;

export const SaveButton = styled("button")`
  background-color: #01ae57;
  min-width: 95px;
  color: white;
  font-weight: bolder;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  &:hover {
    background-color: #00cc66;
    cursor: pointer;
  }
`;

export const ClearButton = styled("button")`
  background-color: #d12b25;
  min-width: 95px;
  color: white;
  font-weight: bolder;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  &:hover {
    background-color: #db3a34;
    cursor: pointer;
  }
`;
