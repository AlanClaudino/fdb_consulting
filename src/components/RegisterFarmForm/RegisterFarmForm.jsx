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
} from './styled';

import { teste } from '../../context/dbContext';

const RegisterFarmForm = () => {
  const handleTeste = async () => {
    const res = await teste();
    let arr = [];
    res.docs.forEach((doc) => {
      arr.push({ ...doc.data(), id: doc.id });
    });

    console.log(arr);
  };

  return (
    <Background>
      <Container>
        <Title>Farm Details</Title>
        <Form>
          <FormSection>
            <Label htmlFor='idNumber'>Farm ID</Label>
            <Input
              type='Text'
              placeholder='Farm identification number'
              id='idNumber'
            />
          </FormSection>
          <FormSection>
            <Label htmlFor='idNumber'>Farm Name</Label>
            <Input
              type='Text'
              placeholder='Farm display / description'
              id='idNumber'
            />
          </FormSection>
          <FormSection>
            <Label htmlFor='idNumber'>Registration number</Label>
            <Input
              type='Text'
              placeholder='Business Registration Number'
              id='idNumber'
            />
          </FormSection>
          <FormSection>
            <Label htmlFor='idNumber'>County</Label>
            <Input type='Text' placeholder='County name' id='idNumber' />
          </FormSection>
          <FormSection>
            <Label htmlFor='idNumber'>State</Label>
            <Input type='Text' placeholder='State' id='idNumber' />
          </FormSection>
          <FormSection style={{ background: 'none', textAlign: 'center' }}>
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
