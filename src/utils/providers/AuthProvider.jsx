import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../../config/firebase.config';
import { AuthContext } from '../contexts';

export default function AuthProvider ({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    // Returns Promise<UserCredential>
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Returns Promise<UserCredential>
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Returns Promise<void>
    const logout = () => {
        return signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ currentUser, register, login, logout }} >
            { children }
        </AuthContext.Provider>
    );
}