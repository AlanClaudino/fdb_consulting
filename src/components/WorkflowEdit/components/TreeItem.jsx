/* eslint-disable react/prop-types */
import {
  AddButton,
  CategoryText,
  FormContainer,
  FormSection,
  InfoContainer,
  Input,
  ItemContainer,
  SaveEditButton,
} from "../styled";
import {
  CheckSquareIcon,
  ChevronRightSquare,
  Edit2Icon,
  MinusSquareIcon,
  Trash2,
} from "lucide-react";
import {Text} from "../../styled/styled";
import {DeleteButton, EditButton} from "../../Workflow/styled";
import {useState} from "react";

const TreeItem = ({
  isClickable,
  category,
  handleClick,
  handleDelete,
  itemOne,
  itemTwo,
  handleForm,
}) => {
  const [inputOne, setInputOne] = useState(itemOne);
  const [inputTwo, setInputTwo] = useState(itemTwo);
  const [isEditing, setIsEditing] = useState(false);

  const inputOneChange = (e) => {
    setInputOne(e.target.value);
  };

  const inputTwoChange = (e) => {
    setInputTwo(e.target.value);
  };

  const handleEdit = () => {
    if (isEditing) {
      setIsEditing(false);
      setInputOne(itemOne);
      setInputTwo(itemTwo);
    } else {
      setIsEditing(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm(inputOne, inputTwo);
    setIsEditing(false);
  };

  return (
    <InfoContainer style={{borderBottom: "1px solid #0d2329"}}>
      <ItemContainer>
        {isClickable ? (
          <AddButton onClick={handleClick}>
            <ChevronRightSquare size={16} />
            <CategoryText>{category}</CategoryText>
          </AddButton>
        ) : (
          <>
            <MinusSquareIcon size={16} />
            <CategoryText>{category}</CategoryText>
          </>
        )}
        {isEditing ? (
          <FormContainer onSubmit={handleSubmit}>
            <FormSection>
              <Input value={inputOne} onChange={inputOneChange} required />
            </FormSection>
            <FormSection>
              <Input value={inputTwo} onChange={inputTwoChange} required />
            </FormSection>
            <FormSection>
              <SaveEditButton type="submit">
                <CheckSquareIcon size={18} />
              </SaveEditButton>
            </FormSection>
          </FormContainer>
        ) : (
          <Text>
            {itemOne} - {itemTwo}
          </Text>
        )}
      </ItemContainer>
      <ItemContainer style={{paddingRight: "10px", gap: "20px"}}>
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

export default TreeItem;
