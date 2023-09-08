import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/styles.scss';
// Cấu hình
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail.jsx';
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
        </Route>
      </Routes>

      {/* </BrowserRouter> */}
    </HistoryRouter>
  </Provider>

);
