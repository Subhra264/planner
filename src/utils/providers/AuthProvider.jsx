import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../config/firebase.config';
import { AuthContext } from '../contexts';

export default function AuthProvider ({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    // Returns Promise<UserCredential>
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    return (
        <AuthContext.Provider value={{ currentUser, register }} >
            { children }
        </AuthContext.Provider>
    );
}