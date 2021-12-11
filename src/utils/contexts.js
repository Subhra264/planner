import { createContext } from 'react';

export const AuthContext = createContext({
    currentUser: null,
    register: () => Promise
});