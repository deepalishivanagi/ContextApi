import React, { createContext, useState } from "react";

var data={
    username:"",
    isAuthenticated:true,
    logIn:()=>{},
    logOut:()=>{}
};

interface contextInteface{
    username:string,
    isAuthenticated:boolean,
    logIn: ()=>void,
    logOut: ()=>void
}

interface contextProps{
    children:React.ReactNode
}

export const Usercontext = createContext<contextInteface>(data);

export default function ContextProvider({children}:contextProps){

    const [state,setState]=useState({  
        username:"",
    isAuthenticated:false}
    )

    const logIn = ():any=>{
        setState({
            username:"Bob",isAuthenticated:true
        });
    }

    const logOut = ():any=>{
        setState({
            username:"",isAuthenticated:false
        });
    }

    const {username,isAuthenticated}=state;

    return(
        <div>
        <Usercontext.Provider value={{username,isAuthenticated,logIn,logOut}}>
            {children}
        </Usercontext.Provider>
        </div>     
    );
}

