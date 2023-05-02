import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({ children }) => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to={'signin'} />;
  }

  return children;
};

export default ProtectedRoutes;
