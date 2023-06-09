/* eslint-disable react/prop-types */
import {
  ChevronDownSquare,
  ChevronRightSquare,
  PlusCircleIcon,
} from "lucide-react";
import {
  ItemContainer,
  AddButton,
  FormSection,
  FormContainer,
  Label,
  Input,
} from "../styled";
import {Text} from "../../styled/styled";

const AddMoreActivity = ({
  isOpen,
  handleIsOpen,
  handleSubmit,
  firstInputValue,
  firstInputOnChange,
  firstInputName,
  firstInputLabel,
  secondInputOnChange,
  secondInputValue,
  secondInputLabel,
  secondInputName,
  buttonText,
}) => {
  return (
    <>
      <ItemContainer>
        <AddButton onClick={handleIsOpen}>
          {isOpen ? (
            <ChevronDownSquare size={16} />
          ) : (
            <ChevronRightSquare size={16} />
          )}
          <Text style={{fontSize: "14px"}}>{buttonText}</Text>
        </AddButton>
      </ItemContainer>
      {isOpen && (
        <FormContainer style={{paddingBottom: "8px"}} onSubmit={handleSubmit}>
          <FormSection>
            <Label htmlFor="subId">{firstInputLabel}</Label>
            <Input
              name={firstInputName}
              value={firstInputValue}
              onChange={firstInputOnChange}
            />
          </FormSection>
          <FormSection>
            <Label htmlFor="subDesc">{secondInputLabel}</Label>
            <Input
              name={secondInputName}
              value={secondInputValue}
              onChange={secondInputOnChange}
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

export default AddMoreActivity;
