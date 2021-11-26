import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth()
    const location = useLocation()
    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} />
    }
    return children;
};

export default PrivateRoute;