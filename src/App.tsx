import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {User, Dashboard, Details, Login} from './pages';
import './App.scss';

function App() {
    return (
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<User />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/detail" element={<Details />} />
        </Routes>
    </BrowserRouter>
    );
}

export default App;
