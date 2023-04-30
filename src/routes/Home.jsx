import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { DarkButton, ErrorMessage, Text } from '../styled/styled';
import { useState } from 'react';

const Home = () => {
  const { user, signout } = useAuthContext();
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

  return (
    <>
      <h1>Home</h1>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Text>{user && user.email}</Text>
      <DarkButton style={{ width: 'fit-content' }} onClick={handleClick}>
        Log Out
      </DarkButton>
    </>
  );
};

export default Home;
