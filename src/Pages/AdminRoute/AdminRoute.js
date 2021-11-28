import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({ children }) => {
    const { user, isLoading, role } = useAuth()
    const location = useLocation()
    if (role !== 'admin') {
        return (
            <div className="spinner-border mt-5" role="status">
            </div>
        )
    }
    if (!user.email || role !== 'admin') {
        return <Navigate to="/dashboard/welcome" state={{ from: location }} />
    }

    return children;
};

export default AdminRoute;