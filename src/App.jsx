import './App.scss';
import React from 'react'
import { BrowserRouter, Redirect, Route, Router } from 'react-router-dom';
import { Authorization, Banks } from './pages';
import { useSelector } from 'react-redux';

export function App() {
  const isAuthorization = useSelector(state => state.authorization.isAuthorization)
  return (
    <div className='container'>
      
      <BrowserRouter >
        {!isAuthorization && <Redirect to = '/auth' />}
        <Route path = '/auth' component = {Authorization} />
        <Route path = '/banks' component = {Banks} />
      </BrowserRouter>
    </div>
    
  );
}