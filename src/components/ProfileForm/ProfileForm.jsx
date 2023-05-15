import { DarkButton, Input, Text } from '../../styled/styled';
import { FormSection, RadioContainer, RadioInput } from './styled';

import farm1 from '../../assets/farmer1.jpg';
import farm2 from '../../assets/farmer2.jpg';
import farm3 from '../../assets/farmer3.jpg';
import farm4 from '../../assets/farmer4.jpg';
import { useRef, useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';

const ProfileForm = () => {
  const [active, setActive] = useState();
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const userNameRef = useRef();
  const { update } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userName = userNameRef.current.value;
    const avatar = active;

    const userInfo = {};

    if (userName) {
      userInfo['displayName'] = userName;
    }

    if (avatar) {
      userInfo['photoURL'] = avatar;
    }

    try {
      await update(userInfo);
      setMessage('Your profile has been updated.');
    } catch (err) {
      console.log(err.message);
      setError('Password or E-mail is invalid. Please, try again.');
    }
  };

  const handleActive = (e) => {
    setActive(e.target.value);
  };

  return (
    <form
      style={{
        width: '100%',
        height: '100%',
      }}
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
            shadow={active == farm1 ? 'rgba(77, 212, 104) 0 0 0 2px' : ''}
          >
            <RadioInput
              type="radio"
              name="avatar"
              value={farm1}
              onChange={handleActive}
            />
            <img
              src={farm1}
              alt="male farmer holding a mobile phone"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </RadioContainer>
          <RadioContainer
            shadow={active == farm2 ? 'rgba(77, 212, 104) 0 0 0 2px' : ''}
          >
            <RadioInput
              type="radio"
              name="avatar"
              value={farm2}
              onChange={handleActive}
            />
            <img
              src={farm2}
              alt="male farmer holding a mobile phone"
              style={{ maxWidth: 'min(200px, 100%)', height: 'auto' }}
            />
          </RadioContainer>
          <RadioContainer
            shadow={active == farm3 ? 'rgba(77, 212, 104) 0 0 0 2px' : ''}
          >
            <RadioInput
              type="radio"
              name="avatar"
              value={farm3}
              onChange={handleActive}
            />
            <img
              src={farm3}
              alt="male farmer holding a mobile phone"
              style={{ maxWidth: 'min(200px, 100%)', height: 'auto' }}
            />
          </RadioContainer>
          <RadioContainer
            shadow={active == farm4 ? 'rgba(77, 212, 104) 0 0 0 2px' : ''}
          >
            <RadioInput
              type="radio"
              name="avatar"
              value={farm4}
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
          margin: '10px',
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
