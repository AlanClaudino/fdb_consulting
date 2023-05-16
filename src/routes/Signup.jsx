import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

import SignUpForm from '../components/SignUpForm/SignUpForm';
import { ColumnContainer } from '../styled/styled';

const Signup = () => {
  const { signup, user } = useAuthContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();

  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmpasswordRef.current.value;

    if (password !== confirmPassword) {
      setError('Passwords do not macth. Please, try again.');
      return;
    }

    try {
      await signup(email, password);
      navigate('/profile');
    } catch (err) {
      console.log(err.message);
      setError('Failed to create account. Please, try again.');
    }
  };
  return (
    <div className='background'>
      <ColumnContainer height='100svh'>
        <SignUpForm
          handleSubmit={handleSubmit}
          user={user}
          emailRef={emailRef}
          passwordRef={passwordRef}
          confirmpasswordRef={confirmpasswordRef}
          error={error}
        />
      </ColumnContainer>
    </div>
  );
};

export default Signup;
