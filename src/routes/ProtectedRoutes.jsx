import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to={'signin'} />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
