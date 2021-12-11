import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function PrivateRouter (props) {
    const { currentUser } = useAuth();
    return (
        currentUser?
            <Outlet />
        :
            <Navigate to='/register' />
    );
}