import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase/firebase';
import React from 'react'

const OAuth = () => {

    const handleGoogleClick = async()=>{
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth,provider);

            console.log(result);
            
        } catch (error) {
            console.log("Couldn't sign in with Google");
            console.log(error);
        }
    }

  return (
    <button onClick={handleGoogleClick} className=' bg-red-700 px-3 py-1 rounded-xl hover:bg-opacity-80 mt-3'> Continue with Google </button>
  )
}

export default OAuth