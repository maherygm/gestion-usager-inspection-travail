import React, { useContext, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router';
import { getUrl } from '../../utils/helpers/baseUrl';
import {jwt_decode} from 'jwt-decode';

export const AuthRedirect = ({children}) => {

    if (!localStorage.getItem('token')) {
        return <Outlet/>
      }else{
        return <Navigate to={'/dashboard'} />; 
      }
    return children
}

export default AuthRedirect