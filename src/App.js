import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import SignupForm from './components/Form/SignupForm/SignupForm';
import LoginForm from './components/Form/LoginForm/LoginForm';
import AttendanceTable from './components/AttendanceTable/AttendanceTable'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/attendance" element={<AttendanceTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
