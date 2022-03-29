import 'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProfile } from './components/user';
import { NewUser } from './components/user';
import ChatPage from './components/chat/ChatPage'
import './index.css';
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/profile" element={<UserProfile name={"Alessandro"}/>}/> 
      <Route path="/signup" element={<NewUser />}/>
      <Route path='/profile/stats'/>
      <Route path='/chat' element={<ChatPage />}/>
    </Routes>
  </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
