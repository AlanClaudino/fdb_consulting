import {useState} from "react";
import {
  AddButton,
  ClearButton,
  FormContainer,
  FormSection,
  Input,
  Label,
} from "./styled";
import {Eraser, ListPlus} from "lucide-react";

// eslint-disable-next-line react/prop-types
const AddGroup = ({handleForm}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm(value);
    setValue("");
  };

  const handleClear = (e) => {
    e.preventDefault();
    setValue("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormSection>
        <Label>Group Description</Label>
        <Input value={value} onChange={handleChange} required />
      </FormSection>
      <FormSection>
        <AddButton type="submit">
          <ListPlus size={18} /> Add
        </AddButton>
        <ClearButton onClick={handleClear}>
          <Eraser size={18} /> Clear
        </ClearButton>
      </FormSection>
    </FormContainer>
  );
};

export default AddGroup;
