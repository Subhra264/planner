import { Route, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function PrivateRouter ({element, ...props}) {
    const { currentUser } = useAuth();
    return (
        <Route {...props} element={currentUser? element : <Navigate to='/register' />} />
    );
}