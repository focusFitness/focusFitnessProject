import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles/styles.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import MainPage from './pages/MainPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <LoginPage />} />
                <Route exact path='/register' element={ <RegisterPage />} />
                <Route exact path='/main' element={ <MainPage />} />
            </Routes>        
        </BrowserRouter>
    )
}

ReactDOM.render(
    <AppRouter />,
    document.getElementById('root')
);