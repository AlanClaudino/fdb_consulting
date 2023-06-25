import {ChevronDownIcon, ChevronRightIcon, PlusCircleIcon} from "lucide-react";
import {
  AddButton,
  InfoContainer,
  Text,
  FormContainer,
  FormSection,
  Input,
  Label,
  AddEquipContainer,
} from "./styled";
import {useEffect, useState} from "react";

// eslint-disable-next-line react/prop-types
const AddEquip = ({inputOne, handleForm}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("");
  const [valueThree, setValueThree] = useState("");
  const [valueFour, setValueFour] = useState("");

  useEffect(() => {
    inputOne && setValueOne(inputOne);
  }, [inputOne]);

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

    handleForm(info, evt);
    setValueTwo("");
    setValueThree("");
    setValueFour("");
  };

  return (
    <AddEquipContainer>
      <InfoContainer>
        <AddButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <ChevronDownIcon size={16} />
          ) : (
            <ChevronRightIcon size={16} />
          )}
          <Text size="14px">Add new equipment</Text>
        </AddButton>
      </InfoContainer>
      {isOpen && (
        <FormContainer onSubmit={handleSubmit}>
          <FormSection>
            <Label>Id</Label>
            <Input
              value={valueOne}
              onChange={inputOneChange}
              disabled
              width={"100px"}
              required
            />
          </FormSection>
          <FormSection>
            <Label>Description</Label>
            <Input value={valueTwo} onChange={inputTwoChange} required />
          </FormSection>
          <FormSection>
            <Label>Unit</Label>
            <Input
              value={valueThree}
              onChange={inputThreeChange}
              width={"100px"}
              required
            />
          </FormSection>
          <FormSection>
            <Label>Cost</Label>
            <Input
              type="number"
              value={valueFour}
              onChange={inputFourChange}
              width={"100px"}
              required
            />
          </FormSection>
          <AddButton type="submit">
            <PlusCircleIcon />
          </AddButton>
        </FormContainer>
      )}
    </AddEquipContainer>
  );
};

export default AddEquip;
