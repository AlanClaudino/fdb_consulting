import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import { RowContainer } from '../styled/styled.jsx';

const Home = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '70px auto',
        minHeight: '100svh',
      }}
    >
      <Header />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '250px auto',
        }}
      >
        <Sidebar />
        <RowContainer style={{ padding: '15px', overflow: 'auto' }}>
          <Outlet />
        </RowContainer>
      </div>
    </div>
  );
};

export default Home;
