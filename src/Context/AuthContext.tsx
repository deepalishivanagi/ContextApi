import React,{Component} from "react";

interface IProps{
    children:any;
   

}

var data={
    username:"",
    isAuthenticated:true,
    login:()=>{},
    logout:()=>{},
}


export const AuthContext = React.createContext(data);


class AuthProvider extends React.Component <IProps>{

    constructor(props:IProps){
        super(props);
    }

    state:any={
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

    render() {

        const {username,isAuthenticated}=this.state;
             const {logIn,logOut}=this;
            

        return(
            <AuthContext.Provider value={{username,isAuthenticated,logIn,logOut}}>
                 {this.props.children}
           </AuthContext.Provider>
        )
    }
}

export default AuthProvider;



//     state={
//         username:"",
//         isAuthenticated:false
//     }

//     logIn = ()=>{
//         this.setState({
//             username:"Bob",isAuthenticated:true
//         });
//     }

//     logOut = ()=>{
//         this.setState({
//             username:"",isAuthenticated:false
//         });

//     render(){

//       const {username,isAuthenticated}=this.state;
//       const {logIn,logOut}=this;
//         return(
//             <AuthContext.Provider value={{username,isAuthenticated,logIn,logOut}}>
//                 {this.props.children}
//             </AuthContext.Provider>
//         )
//     }
// }

// export default AuthProvider;