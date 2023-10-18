import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import LoginForm from './components/LoginForm/LoginForm';
import UserDashboard from './components/UserDashboard';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/login" element={<LoginForm />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
