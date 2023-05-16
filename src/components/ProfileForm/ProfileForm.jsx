import { DarkButton, Input, Text } from '../../styled/styled';
import { FormSection, RadioContainer, RadioInput } from './styled';

import farm1 from '../../assets/farmer1.jpg';
import farm2 from '../../assets/farmer2.jpg';
import farm3 from '../../assets/farmer3.jpg';
import farm4 from '../../assets/farmer4.jpg';

// eslint-disable-next-line react/prop-types
const ProfileForm = ({ handleSubmit, userNameRef, active, handleActive }) => {
  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
      onSubmit={handleSubmit}
    >
      <FormSection>
        <Input
          type="text"
          placeholder="Type your user name..."
          ref={userNameRef}
          style={{ maxWidth: '500px', margin: '0' }}
        />
      </FormSection>
      <div>
        <Text style={{ padding: '0 20px' }}>Select your avartar:</Text>
        <FormSection justify="space-between" style={{ height: '100%' }}>
          <RadioContainer
            shadow={active == 'farmer1' ? 'rgba(77, 212, 104) 0 0 0 2px' : ''}
          >
            <RadioInput
              type="radio"
              name="avatar"
              value={'farmer1'}
              onChange={handleActive}
            />
            <img
              src={farm1}
              alt="male farmer holding a mobile phone"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </RadioContainer>
          <RadioContainer
            shadow={active == 'farmer2' ? 'rgba(77, 212, 104) 0 0 0 2px' : ''}
          >
            <RadioInput
              type="radio"
              name="avatar"
              value={'farmer2'}
              onChange={handleActive}
            />
            <img
              src={farm2}
              alt="male farmer holding a mobile phone"
              style={{ maxWidth: 'min(200px, 100%)', height: 'auto' }}
            />
          </RadioContainer>
          <RadioContainer
            shadow={active == 'farmer3' ? 'rgba(77, 212, 104) 0 0 0 2px' : ''}
          >
            <RadioInput
              type="radio"
              name="avatar"
              value={'farmer3'}
              onChange={handleActive}
            />
            <img
              src={farm3}
              alt="male farmer holding a mobile phone"
              style={{ maxWidth: 'min(200px, 100%)', height: 'auto' }}
            />
          </RadioContainer>
          <RadioContainer
            shadow={active == 'farmer4' ? 'rgba(77, 212, 104) 0 0 0 2px' : ''}
          >
            <RadioInput
              type="radio"
              name="avatar"
              value={'farmer4'}
              onChange={handleActive}
            />
            <img
              src={farm4}
              alt="male farmer holding a mobile phone"
              style={{ maxWidth: 'min(200px, 100%)', height: 'auto' }}
            />
          </RadioContainer>
        </FormSection>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <DarkButton style={{ maxWidth: '300px', margin: '10px' }} type="submit">
          Update Profile
        </DarkButton>
      </div>
    </form>
  );
};
export default ProfileForm;
