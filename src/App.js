import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;
const Profile = () => <h1>Profile Page</h1>;
const Login = () => <h1>Login Page</h1>;
const User = ({ id }) => <h1>User Page for ID: {id}</h1>;
const Settings = () => <h1>Settings Page</h1>;

const isAuthenticated = () => {
  return false;
};

// Компонент для захищених маршрутів
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id" element={<DynamicUser />} />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

const DynamicUser = () => {
  const { id } = useParams(); 
  return <User id={id} />;
};

export default App;
