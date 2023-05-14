import { useRef, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';

import ResetPasswordForm from '../components/ResetPasswordForm/ResetPasswordForm';
import { ColumnContainer } from '../styled/styled';

const ResetPassword = () => {
  const { resetPassword } = useAuthContext();
  const emailRef = useRef();
  const [error, setError] = useState('');
  const [sentMessage, setSentMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const email = emailRef.current.value;

    try {
      await resetPassword(email);
      setSentMessage('The reset link was sent to your e-mail.');
    } catch (err) {
      console.log(err.message);
      setError('Failed to reset password. Please, try again.');
    }
  };

  return (
    <div className="background">
      <ColumnContainer height="100svh">
        <ResetPasswordForm
          handleSubmit={handleSubmit}
          emailRef={emailRef}
          error={error}
          sentMessage={sentMessage}
        />
      </ColumnContainer>
    </div>
  );
};

export default ResetPassword;
