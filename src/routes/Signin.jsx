import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

import { ColumnContainer } from '../styled/styled';
import SignInForm from '../components/SignInForm/SignInForm';

const Signin = () => {
  const { signin, user } = useAuthContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      await signin(email, password);
      navigate('/');
    } catch (err) {
      console.log(err.message);
      setError('Password or E-mail is invalid. Please, try again.');
    }
  };

  return (
    <div className="background">
      <ColumnContainer height="100svh">
        <SignInForm
          handleSubmit={handleSubmit}
          user={user}
          emailRef={emailRef}
          passwordRef={passwordRef}
          error={error}
        />
      </ColumnContainer>
    </div>
  );
};

export default Signin;
