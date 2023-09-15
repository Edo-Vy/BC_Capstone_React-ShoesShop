import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/styles.scss';
// Cấu hình
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail.jsx';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Profile  from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import Search from './pages/Search/Search';
// Redux
import { Provider } from 'react-redux';
import { store } from '../src/redux/configStore'
// history
import { createBrowserHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

export const history = createBrowserHistory();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < Provider store={store}>
    {/* <BrowserRouter> */}
    <HistoryRouter history={history}>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path='detail'>
            <Route path=':id' element={<Detail/>}></Route>
          </Route>
          <Route path='cart' element={<Cart/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='profile' element={<Profile/>}></Route>
          <Route path='register' element={<Register/>}></Route>
          <Route path='search' element={<Search/>}></Route>
          <Route path='*' element={<Navigate to ="/"/>}></Route>
        </Route>
      </Routes>

      {/* </BrowserRouter> */}
    </HistoryRouter>
  </Provider>

);
