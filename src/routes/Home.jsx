import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';

const Home = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '60px auto',
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
        <>
          <Outlet />
        </>
      </div>
    </div>
  );
};

export default Home;
