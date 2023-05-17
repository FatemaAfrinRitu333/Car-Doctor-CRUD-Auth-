import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='w-full flex mx-auto justify-center items-center h-screen'>
            <progress className="progress w-4/5 bg-primary"></progress>
        </div>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;