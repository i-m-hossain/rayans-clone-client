import React from 'react';
import { Outlet } from 'react-router';

const Dashboard = () => {
    return (
        <Outlet /> //rendering components from app.js
    );
};

export default Dashboard;