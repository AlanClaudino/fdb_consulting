import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Home from './routes/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
