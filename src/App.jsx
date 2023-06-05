import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import ProtectedRoutes from './routes/ProtectedRoutes';
import ResetPassword from './routes/ResetPassword';
import Dashboard from './routes/Dashboard';
import Home from './routes/Home';
import Profile from './routes/Profile';
import Farm from './routes/Farm';
import Project from './routes/Project';
import RegisterFarm from './routes/RegisterFarm';
import Workflow from './routes/Workflow';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProtectedRoutes />}>
          <Route path='/' element={<Home />}>
            <Route index element={<Project />} />
            <Route path='/register-farm' element={<RegisterFarm />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/farm' element={<Farm />}>
              <Route index element={<Dashboard />} />
              <Route path='workflow' element={<Workflow />} />
            </Route>
          </Route>
        </Route>

        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='reset-password' element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
