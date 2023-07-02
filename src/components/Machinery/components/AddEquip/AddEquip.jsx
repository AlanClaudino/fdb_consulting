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
  const [valueFour, setValueFour] = useState("0.00");

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
              type="text"
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
