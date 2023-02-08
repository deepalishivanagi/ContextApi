import React, { createContext } from "react";


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

interface contextState{
    username:string,
    isAuthenticated:boolean
}

const userContext = createContext<contextInteface>(data);

class ContextProvider extends React.Component<contextProps,contextState,contextInteface>{

    state={
        username:"",
        isAuthenticated:false
    }

    logIn = ()=>{
        this.setState({
            username:"Bob",isAuthenticated:true
        });
    }

    logOut = ()=>{
        this.setState({
            username:"",isAuthenticated:false
        });
    }

    render(){

        const {username,isAuthenticated}=this.state;
        const {logIn,logOut}=this;


        return(
            <>
            <userContext.Provider value={{username,isAuthenticated,logIn,logOut}}>
                {this.props.children}
            </userContext.Provider>
            </>
        )
    }
}