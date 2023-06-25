/* eslint-disable react/prop-types */
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  Edit2Icon,
  Trash2,
} from "lucide-react";
import {
  CategoryText,
  DeleteButton,
  EditButton,
  ExpandButton,
  FormContainer,
  FormSection,
  InfoContainer,
  Input,
  ItemContainer,
} from "../styled";
import {useState} from "react";
import {Text} from "../../styled/styled";

const GroupItem = ({isOpen, handleClick, value, handleForm, id}) => {
  const [isEditing, setIsEditing] = useState();
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleForm(inputValue);
  };

  return (
    <InfoContainer>
      <ItemContainer>
        <ExpandButton onClick={handleClick}>
          {isOpen ? (
            <ChevronDownIcon size={16} />
          ) : (
            <ChevronRightIcon size={16} />
          )}
          <CategoryText>Group</CategoryText>
        </ExpandButton>
      </ItemContainer>
      <ItemContainer>
        <Text>{id}</Text>
      </ItemContainer>
      <ItemContainer>
        {isEditing ? (
          <FormContainer onSubmit={handleSubmit}>
            <FormSection style={{gap: "10px"}}>
              <Input value={inputValue} onChange={handleChange} />
              <EditButton>
                <CheckIcon size={18} />
              </EditButton>
            </FormSection>
          </FormContainer>
        ) : (
          <Text style={{padding: "6.5px 0"}}>{inputValue}</Text>
        )}
      </ItemContainer>
      <ItemContainer style={{justifyContent: "center"}}>
        <EditButton onClick={() => setIsEditing(!isEditing)}>
          <Edit2Icon size={18} />
        </EditButton>
        <DeleteButton>
          <Trash2 size={18} />
        </DeleteButton>
      </ItemContainer>
    </InfoContainer>
  );
};

export default GroupItem;
