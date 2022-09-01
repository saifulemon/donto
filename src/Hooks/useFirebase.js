import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../Firebase/firebase.init";

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    
    const singnInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
            console.log(result.user);
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const handleFacebookSignIN = () => {
        signInWithPopup(auth, facebookProvider)
        .then(result => {
          const { displayName, email, photoURL } = result.user;
          console.log(result.user);
          const logedInUser = {
            name: displayName,
            email: email,
            img: photoURL
          };
          setUser(logedInUser)
        })
      }

    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
    }

    useEffect(() => {
       const unsubscribed = onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribed;
    },)

    return {
        user,
        error,
        logout,
        singnInWithGoogle,
        signInWithGithub,
        handleFacebookSignIN
    }
    
}

export default useFirebase;