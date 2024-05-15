import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";
// import PropTypes from 'prop-types';
export const AuthContext = createContext(null)
const auth = getAuth(app)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail =  currentUser?.email || user?.email
            const loggedUser = { email: userEmail }
            setUser(currentUser)
            setLoading(false)
            if (currentUser) {
                axios.post('https://assignment-p11-server.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
                    .catch(error => console.log(error));
            }
            else {
                axios.post('https://assignment-p11-server.vercel.app/logout', loggedUser , {
                    withCredentials:true
                })
                .then(res => {
                    console.log(res.data);
                })
            }
        })
        return () => {
            Unsubscribe
        }
    }, [])
    const SignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const AuthInfo = {
        createUser,
        logOut,
        loading,
        user,
        SignIn
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
// AuthProvider.propTypes= {
//     children: PropTypes.any
// }