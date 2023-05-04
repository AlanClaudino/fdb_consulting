import {
  ErrorMessage,
  StyledHeader,
  Text,
  UnstyledButton,
} from '../styled/styled';
import logo from '../assets/Cut-Logo-2.png';
import { User } from 'lucide-react';
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [displayProp, setDisplayProp] = useState('none');
  const { signout } = useAuthContext();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signout();
      navigate('signin');
    } catch (err) {
      console.log(err.message);
      setError('Failed to log out. Please, try again.');
    }
  };

  const showProfileMenu = () => {
    if (displayProp != 'none') return setDisplayProp('none');

    setDisplayProp('block');
    console.log(displayProp);
  };

  return (
    <StyledHeader style={{ position: 'relative' }}>
      <img
        src={logo}
        alt="Company Logo"
        style={{ height: '100%', width: 'auto' }}
      />
      <div
        onClick={() => showProfileMenu()}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <User
          color="white"
          size={30}
          style={{
            borderRadius: '50%',
            border: '2px solid white',
            // padding: '2px',
          }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          right: '20px',
          top: '50px',
          display: displayProp,
          background: 'white',
          boxShadow:
            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
          borderRadius: '5px',
        }}
      >
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <UnstyledButton color="#4dd467">
          <Text style={{ padding: '10px 20px' }}>Profile Settings</Text>
        </UnstyledButton>
        <hr style={{ width: '90%', margin: '0 auto' }} />
        <UnstyledButton color="#4dd467" onClick={handleClick}>
          <Text style={{ padding: '10px 20px' }}>Logout</Text>
        </UnstyledButton>
      </div>
    </StyledHeader>
  );
};

export default Header;
