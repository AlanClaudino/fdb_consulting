import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import ProtectedRoutes from './routes/ProtectedRoutes';
import ResetPassword from './routes/ResetPassword';
import Dashboard from './routes/Dashboard';
import Home from './routes/Home';
import Profile from './routes/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>

        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
