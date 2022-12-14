import React, { Component, useState} from 'react';
import { BrowserRouter as Router, createBrowserRouter, Route, Routes, RouterProvider, createRoutesFromElements } from 'react-router-dom';

import LoginPage from './pages/LoginPage.jsx';
// import SignUpPage from './pages/SignUpPage.jsx';
// import MainPage from './pages/MainPage.jsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path = "/" element={<LoginPage />} >
        </Route>
    )
)

const App = () => {
  const [state, setState] = useState({
    isLoggedIn: false,
    user_id: null,
    username: null,
  });

  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<LoginPage state={state} setState={setState} />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/main' element={<MainPage state={state} setState={setState} />} />
      </Routes> */}
      {/* <RouterProvider route={router} /> */}
      <div>hello</div>
    </div>
  );
}

export default App;