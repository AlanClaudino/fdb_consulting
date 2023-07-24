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
} from "./styled";
import {useEffect, useState} from "react";
import {Text} from "../../../styledold/styled";

const GroupItem = ({
  isOpen,
  handleClick,
  value,
  handleForm,
  id,
  handleGroupDelete,
}) => {
  const [isEditing, setIsEditing] = useState();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (value) {
      setInputValue(value);
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    setInputValue(value);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handle Submit", inputValue);
    handleForm(inputValue);
    setIsEditing(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    handleGroupDelete();
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
              <EditButton type="submit">
                <CheckIcon size={18} />
              </EditButton>
            </FormSection>
          </FormContainer>
        ) : (
          <Text style={{padding: "6.5px 0"}}>{inputValue}</Text>
        )}
      </ItemContainer>
      <ItemContainer style={{justifyContent: "center"}}>
        <EditButton onClick={handleEdit}>
          <Edit2Icon size={18} />
        </EditButton>
        <DeleteButton onClick={handleDelete}>
          <Trash2 size={18} />
        </DeleteButton>
      </ItemContainer>
    </InfoContainer>
  );
};

export default GroupItem;
