import React, { useContext, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router';
import { getUrl } from '../../utils/helpers/baseUrl';
import {jwtDecode} from 'jwt-decode';
import { toast } from 'react-toastify';

export const ProtectedRoute = ({children, roles}) => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const decodedToken = jwtDecode(token)
      const role = decodedToken.role;
      if(roles.includes(role)){
        return <Outlet />;
      }else {
        toast.error("Vous n\'avez pas accès à cette page.")
        return <Navigate to={'/unauthorized'} />;      
      }
    } 

    return children
}

export default ProtectedRoute