import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "../firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const UserContext = createContext();

function UserContextProvider(props){
    
    const children = props.children;
    const [auth,setAuth] = useState(false);
    const [isLoginAuth,setIsLoginAuth] = useState(true);
    const [user,setUser] = useState(null);
    const [userData,setUserData] = useState([]); 

    const logout = async()=>{
        try {
            await signOut;
            setUser(null);  
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        onAuthStateChanged(async(user)=>{
            if(user){
                setUser(user);
                // const docRef = doc(db,"user",user.uid);
                // const docSnap = await getDoc(docRef);
                // setUserData(docSnap.data);
            }
        })
    });

    const value = {user,setUser,userData,setUserData, logout, auth, setAuth, isLoginAuth, setIsLoginAuth};

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

export default UserContextProvider;