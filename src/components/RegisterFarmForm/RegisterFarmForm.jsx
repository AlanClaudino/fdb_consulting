/* eslint-disable react/prop-types */
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

import {teste} from "../../context/dbContext";

const RegisterFarmForm = ({
  handleSubmit,
  idNumberRef,
  farmNameRef,
  registrationRef,
  countyRef,
  stateRef,
}) => {
  const handleTeste = async () => {
    const res = await teste();
    let arr = [];
    res.docs.forEach((doc) => {
      arr.push({...doc.data(), id: doc.id});
    });

    console.log(arr);
  };

  return (
    <Background>
      <Container>
        <Title>Farm Details</Title>
        <Form onSubmit={handleSubmit}>
          <FormSection>
            <Label htmlFor="idNumber">Farm ID</Label>
            <Input
              type="Text"
              placeholder="Farm identification number"
              id="idNumber"
              ref={idNumberRef}
            />
          </FormSection>
          <FormSection>
            <Label htmlFor="farmName">Farm Name</Label>
            <Input
              type="Text"
              placeholder="Farm display / description"
              id="farmName"
              ref={farmNameRef}
            />
          </FormSection>
          <FormSection>
            <Label htmlFor="registration">Registration number</Label>
            <Input
              type="Text"
              placeholder="Business Registration Number"
              id="registration"
              ref={registrationRef}
            />
          </FormSection>
          <FormSection>
            <Label htmlFor="county">County</Label>
            <Input
              type="Text"
              placeholder="County name"
              id="county"
              ref={countyRef}
            />
          </FormSection>
          <FormSection>
            <Label htmlFor="State">State</Label>
            <Input type="Text" placeholder="State" id="State" ref={stateRef} />
          </FormSection>
          <FormSection style={{background: "none", textAlign: "center"}}>
            <SaveButton>Save</SaveButton>
            <ClearButton>Clear</ClearButton>
          </FormSection>
        </Form>
        <button onClick={handleTeste}>Teste</button>
      </Container>
    </Background>
  );
};

export default RegisterFarmForm;
