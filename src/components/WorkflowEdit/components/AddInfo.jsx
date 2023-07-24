/* eslint-disable react/prop-types */
import {
  ChevronDownSquare,
  ChevronRightSquare,
  PlusCircleIcon,
} from "lucide-react";
import {
  AddButton,
  FormSection,
  FormContainer,
  Label,
  Input,
  InfoContainer,
} from "../styled";
import {Text} from "../../styledold/styled";
import {useEffect, useState} from "react";

const AddInfo = ({
  handleSubmit,
  firstInputLabel,
  secondInputLabel,
  buttonText,
  valueOne,
  valueTwo,
}) => {
  const [isOpen, setIsOpen] = useState();
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");

  useEffect(() => {
    if (valueOne) setInputOne(valueOne);
    if (valueTwo) setInputTwo(valueTwo);
  }, [valueOne, valueTwo]);

  const inputOneChange = (e) => {
    setInputOne(e.target.value);
  };

  const inputTwoChange = (e) => {
    setInputTwo(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();

    const info = {
      inputOne,
      inputTwo,
    };
    handleSubmit(info, e);
    setInputOne("");
    setInputTwo("");
  };

  return (
    <>
      <InfoContainer>
        <AddButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <ChevronDownSquare size={16} />
          ) : (
            <ChevronRightSquare size={16} />
          )}
          <Text style={{fontSize: "14px"}}>{buttonText}</Text>
        </AddButton>
      </InfoContainer>
      {isOpen && (
        <FormContainer style={{paddingBottom: "8px"}} onSubmit={handleForm}>
          <FormSection>
            <Label htmlFor="subId">{firstInputLabel}</Label>
            <Input
              value={inputOne}
              onChange={inputOneChange}
              required
              disabled={valueOne ? true : false}
            />
          </FormSection>
          <FormSection>
            <Label htmlFor="subDesc">{secondInputLabel}</Label>
            <Input
              value={inputTwo}
              onChange={inputTwoChange}
              required
              disabled={valueTwo ? true : false}
            />
          </FormSection>
          <AddButton type="submit">
            <PlusCircleIcon />
          </AddButton>
        </FormContainer>
      )}
    </>
  );
};

export default AddInfo;
