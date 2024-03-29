import { createContext } from 'react';

export const AuthContext = createContext({
    currentUser: null,
    register: () => Promise,
    login: () => Promise,
    logout: () => Promise,
    addDocument: () => Promise,
    setDocument: () => Promise,
    getDocument: () => Promise,
    queryDocuments: () => Promise
});