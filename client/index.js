import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles/styles.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <LoginPage />} />
                <Route exact path='/dashboard' element={ <Dashboard />} />
                <Route exact path='/register' element={ <RegisterPage />} />
            </Routes>        
        </BrowserRouter>
    )
}

ReactDOM.render(
    <AppRouter />,
    document.getElementById('root')
);