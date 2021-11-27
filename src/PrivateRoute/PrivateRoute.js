import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth()
    console.log(isLoading)
    const location = useLocation()
    if (isLoading) {
        return (
            <div className="spinner-border mt-5" role="status">
            </div>
        )
    }
    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} />
    }

    return children;
};

export default PrivateRoute;