import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signin from './routes/Signin';
import Signup from './routes/Signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
