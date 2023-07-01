import styled from "styled-components";

export const MachineryContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NewGroupContainer = styled.section`
  padding: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const EquipContainer = styled.section`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 70px;
  flex-wrap: wrap;
`;

export const FormSection = styled.section`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Label = styled("label")`
  color: #0d2329;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  padding: 5px;
  width: 100%;
  font-weight: bolder;
`;

export const Input = styled("input")`
  color: #0d2329;
  min-width: 300px;
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

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: #01ae57;
  min-width: 120px;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  padding: 7px 10px;
  border: none;
  &:hover {
    background-color: #00cc66;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled("p")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  padding: 10px;
  border-left: 10px solid #ff3333;
  background-color: rgb(250, 250, 250);
  color: #0d2329;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 6fr 1fr;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid rgba(13, 35, 41, 0.3);
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ExpandButton = styled.button`
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

export const CategoryText = styled.h3`
  min-width: 170px;
  color: inherit;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  text-align: start;
  font-weight: 600;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #fafafa;
  border: none;
  &:hover {
    cursor: pointer;
    color: #00cc66;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #fafafa;
  border: none;
  &:hover {
    cursor: pointer;
    color: #db3a34;
  }
`;

export const SaveButton = styled("button")`
  background-color: #01ae57;
  min-width: 120px;
  color: white;
  font-weight: bolder;
  border-radius: 5px;
  font-size: 16px;
  padding: 7px 10px;
  border: none;
  &:hover {
    background-color: #00cc66;
    cursor: pointer;
  }
`;

export const ClearButton = styled("button")`
  background-color: #d12b25;
  min-width: 120px;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  padding: 7px 10px;
  border: none;
  &:hover {
    background-color: #db3a34;
    cursor: pointer;
  }
`;

export const GroupTitle = styled.section`
  display: grid;
  grid-template-columns: 2fr 3fr 3fr 1fr 2fr 1fr;
  background-color: rgb(13, 45, 51);
  color: white;
  padding: 15px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const SuccessMessage = styled("p")`
  display: flex;
  justify-content: start;
  align-items: center;
  width: fit-content;
  gap: 25px;
  max-width: 800px;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  padding: 10px;
  border-left: 10px solid #01ae57;
  background-color: rgb(250, 250, 250);
  color: #0d2329;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const CloseButton = styled.button`
  color: #0d2329;
  margin: none;
  padding: none;
  background-color: inherit;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(13, 45, 51, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConfirmContainer = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
  background-color: #fafafa;
  max-width: 500px;
  padding: 30px;
`;
