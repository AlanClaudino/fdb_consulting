import {CheckIcon, Edit2Icon, Trash2} from "lucide-react";
import {
  CategoryText,
  DeleteButton,
  EditButton,
  EquipContainer,
  FormContainer,
  FormSection,
  Input,
  ItemContainer,
  Text,
  TextContainer,
} from "./styled";
import {useEffect, useState} from "react";

// eslint-disable-next-line react/prop-types
const EquipItem = ({inputOne, inputTwo, inputThree, inputFour, handleEdit}) => {
  const [isEditing, setIsEditing] = useState(false);

  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("");
  const [valueThree, setValueThree] = useState("");
  const [valueFour, setValueFour] = useState("");

  useEffect(() => {
    inputOne && setValueOne(inputOne);
    inputTwo && setValueTwo(inputTwo);
    inputThree && setValueThree(inputThree);
    inputFour && setValueFour(inputFour);
  }, [inputOne, inputTwo, inputThree, inputFour]);

  const inputOneChange = (e) => {
    setValueOne(e.target.value);
  };

  const inputTwoChange = (e) => {
    setValueTwo(e.target.value);
  };
  const inputThreeChange = (e) => {
    setValueThree(e.target.value);
  };
  const inputFourChange = (e) => {
    setValueFour(e.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const info = {
      valueOne,
      valueTwo,
      valueThree,
      valueFour,
    };

    handleEdit(info, evt);
  };

  return (
    <EquipContainer>
      <ItemContainer style={{paddingLeft: "26px"}}>
        <CategoryText>Equipment</CategoryText>
      </ItemContainer>
      <ItemContainer>
        {isEditing ? (
          <FormContainer onSubmit={handleSubmit}>
            <FormSection>
              <Input value={valueOne} onChange={inputOneChange} disabled />
            </FormSection>
            <FormSection>
              <Input value={valueTwo} onChange={inputTwoChange} />
            </FormSection>
            <FormSection>
              <Input value={valueThree} onChange={inputThreeChange} />
            </FormSection>
            <FormSection>
              <Input value={valueFour} onChange={inputFourChange} />
              <EditButton type="submit">
                <CheckIcon size={18} />
              </EditButton>
            </FormSection>
          </FormContainer>
        ) : (
          <TextContainer>
            <div>
              <Text>{valueOne}</Text>
            </div>
            <Text>{valueTwo}</Text>
            <Text>{valueThree}</Text>
            <Text>{valueFour}</Text>
          </TextContainer>
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
    </EquipContainer>
  );
};

export default EquipItem;
