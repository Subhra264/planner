import { useContext } from 'react';
import { AuthContext } from '../utils/contexts';

export default function useAuth () {
    const authContextValue = useContext(AuthContext);
    return authContextValue;
}