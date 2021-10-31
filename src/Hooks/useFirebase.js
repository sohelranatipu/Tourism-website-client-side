import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signOut} from "firebase/auth";
import initializeAuth from '../Components/Firebase/firebase.init';
import { useEffect } from 'react';
import { useState } from 'react';

initializeAuth()

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);

    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();
// Google Sign in 
const signInUsingGoogle = () => {
    setIsloading(true);
   return  signInWithPopup(auth, GoogleProvider)
   .finally(() => {
    setIsloading(false);
   })
    
}

useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } 

        setIsloading(()=> setIsloading(false));
    });

},[])

const logOut = ()=>{
    setIsloading(true);
    signOut(auth)
    .then(() => {
         setUser({});
      })
      .finally(()=>{
        setIsloading(false)
      })
}

return {
    signInUsingGoogle,
    user,
    isLoading,
    logOut
}

}

export default useFirebase ;


