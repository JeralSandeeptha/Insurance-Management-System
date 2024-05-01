import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../pages/landing/Landing';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import CompanyDashboard from '../pages/company_dashboard/CompanyDashboard';
import UserDashboard from '../pages/user_dashboard/UserDashboard';
import CompanyLogin from '../pages/company_login/CompanyLogin';
import CompanyRegister from '../pages/company_register/CompanyRegister';
import { AppProvider } from '../context/AppContext';

const Navigation = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Landing}/>
          <Route path='/register' Component={Register}/>
          <Route path='/login' Component={Login}/>
          <Route path='/company/dashboard' Component={CompanyDashboard}/>
          <Route path='/user/dashboard' Component={UserDashboard}/>
          <Route path='/company/login' Component={CompanyLogin}/>
          <Route path='/company/register' Component={CompanyRegister}/>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default Navigation