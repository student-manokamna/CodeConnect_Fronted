import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ Add BrowserRouter
import Navbar from './components/Navbar';
import Body from './components/Body';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Feed from './components/Feed';
import Connection from './components/Connection';
import Requests from './components/Requests';
import Premium from './components/Premium';
import Intail from './components/Intail';
import { Provider } from 'react-redux';
import store from './utils/appStore';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter> {/* ✅ Wrap everything inside */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Body />}>
            <Route index element={<Intail />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='profile' element={<Profile />} />
            <Route path='feed' element={<Feed />} />
            <Route path='connection' element={<Connection />} />
            <Route path='requests' element={<Requests />} />
            <Route path='premium' element={<Premium />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
