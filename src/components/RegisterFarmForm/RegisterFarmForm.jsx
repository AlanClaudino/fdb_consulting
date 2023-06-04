/* eslint-disable react/prop-types */
import {ErrorMessage} from "../styled/styled";
import {
  Background,
  ClearButton,
  Container,
  Form,
  FormSection,
  Input,
  Label,
  SaveButton,
  Title,
} from "./styled";

const RegisterFarmForm = ({
  handleSubmit,
  idNumberRef,
  farmNameRef,
  registrationRef,
  countyRef,
  stateRef,
  error,
  formRef,
}) => {
  return (
    <Background>
      <Container>
        <Title>Farm Details</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Form onSubmit={handleSubmit} ref={formRef}>
          <FormSection>
            <Label htmlFor="idNumber">Farm ID</Label>
            <Input
              type="Text"
              placeholder="Farm identification number"
              id="idNumber"
              required
              ref={idNumberRef}
            />
          </FormSection>
          <FormSection>
            <Label htmlFor="farmName">Farm Name</Label>
            <Input
              type="Text"
              placeholder="Farm display / description"
              id="farmName"
              required
              ref={farmNameRef}
            />
          </FormSection>
          <FormSection>
            <Label htmlFor="registration">Registration number</Label>
            <Input
              type="Text"
              placeholder="Business Registration Number"
              id="registration"
              required
              ref={registrationRef}
            />
          </FormSection>
          <FormSection>
            <Label htmlFor="county">County</Label>
            <Input
              type="Text"
              placeholder="County name"
              id="county"
              required
              ref={countyRef}
            />
          </FormSection>
          <FormSection>
            <Label htmlFor="State">State</Label>
            <Input type="Text" placeholder="State" id="State" ref={stateRef} />
          </FormSection>
          <FormSection style={{background: "none", textAlign: "center"}}>
            <SaveButton type="submit">Save</SaveButton>
            <ClearButton type="reset">Clear</ClearButton>
          </FormSection>
        </Form>
      </Container>
    </Background>
  );
};

export default RegisterFarmForm;
