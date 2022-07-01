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
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/connect" element={<User />} />
            <Route path="/details" element={<Details />} />
        </Routes>
    </BrowserRouter>
    );
}

export default App;
