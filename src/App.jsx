import './App.scss';
import React from 'react'
import { BrowserRouter, Redirect, Route, Router } from 'react-router-dom';
import { Authorization, Banks, BankServiceManagement, ServicesManagement, AvailableServices, SelectedService } from './pages';
import { useDispatch, useSelector } from 'react-redux';
import { checkOutAuth } from './redux/actions';

export function App() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(checkOutAuth())
  }, [])
  const isAuthorization = useSelector(state => state.authorization.isAuthorization)
  return (
    <div className='container'>
      
      <BrowserRouter >
        {!isAuthorization && <Redirect to = '/auth' />}
        <Route path = '/auth' component = {Authorization} />
        <Route exact path = '/banks' component = {Banks} />
        {/* <Route exact path = '/banks/creating' component = {BankServiceManagement} /> */}
        <Route exact path = '/bank/management-services' component = {ServicesManagement} />
        <Route exact path = '/bank/services' component = {AvailableServices} />
        <Route exact path = '/bank/selected-service' component = {SelectedService} />

      </BrowserRouter>
    </div>
    
  );
}