import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection, doc, getDoc, setDoc, query, getDocs, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { auth, firestore } from '../../config/firebase.config';
import { AuthContext } from '../contexts';

export default function AuthProvider ({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            console.log('Current user', user);
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

    const addDocument = (collectionName, data) => {
        return addDoc(collection(firestore, collectionName), data);
    };

    const setDocument = (collectionName, id, data) => {
        return setDoc(doc(firestore, collectionName, id), data, { merge: true });
    };

    const getDocument = (collectionName, id) => {
        return getDoc(doc(firestore, collectionName, id));
    };

    const queryDocuments = (collectionName, queries) => {
        const q = query(collection(firestore, collectionName), where(...queries));
        // const q = collection(firestore, collectionName);
        console.log('Query', q);
        return getDocs(q);
    };

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                register,
                login,
                logout,
                addDocument,
                setDocument,
                getDocument,
                queryDocuments
            }}
        >
            { children }
        </AuthContext.Provider>
    );
}