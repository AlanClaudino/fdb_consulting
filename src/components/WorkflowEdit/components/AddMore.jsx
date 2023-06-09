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

const AddMore = ({
  isOpen,
  handleIsOpen,
  handleSubmit,
  formRef,
  firstInputRef,
  firstInputLabel,
  secondInputRef,
  secondInputLabel,
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
        <FormContainer onSubmit={handleSubmit} ref={formRef}>
          <FormSection>
            <Label htmlFor="firstInput">{firstInputLabel}</Label>
            <Input id="firstInput" ref={firstInputRef} />
          </FormSection>
          <FormSection>
            <Label htmlFor="secondInput">{secondInputLabel}</Label>
            <Input id="secondInput" ref={secondInputRef} />
          </FormSection>
          <AddButton type="submit">
            <PlusCircleIcon />
          </AddButton>
        </FormContainer>
      )}
    </>
  );
};

export default AddMore;
