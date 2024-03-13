import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";
import Homepage from './Pages/Home/Home';
function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/resetpassword" element={<ResetPassword />} /> */}

        <Route path="/signup" element={<Signup />} />

      </Routes>

    </Router >
  );
}

export default App;
