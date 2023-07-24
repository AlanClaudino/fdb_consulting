/* eslint-disable react/prop-types */
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

const EquipItem = ({
  inputOne,
  inputTwo,
  inputThree,
  inputFour,
  handleEdit,
  handleEquipDelete,
}) => {
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
    const value = e.target.value.replace(/\D/g, "");

    const decimalPlace = value.length - 2;

    const newValue = `${value.slice(0, decimalPlace)}.${value.slice(
      decimalPlace
    )}`;

    const finalValue = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(newValue);

    setValueFour(finalValue);
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
    setIsEditing(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    handleEquipDelete();
  };
  return (
    <EquipContainer>
      <ItemContainer style={{paddingLeft: "26px"}}>
        <CategoryText>Employee</CategoryText>
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
        <DeleteButton onClick={handleDelete}>
          <Trash2 size={18} />
        </DeleteButton>
      </ItemContainer>
    </EquipContainer>
  );
};

export default EquipItem;
