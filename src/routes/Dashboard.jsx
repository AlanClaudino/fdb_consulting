import { useAuthContext } from '../context/AuthContext';
import { Text } from '../styled/styled';

const Dashboard = () => {
  const { user } = useAuthContext();

  return (
    <>
      <h1>Dashboard</h1>
      <Text>{user && user.email}</Text>
    </>
  );
};

export default Dashboard;
