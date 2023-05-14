import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';

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
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
