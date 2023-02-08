import React,{Component} from "react"
import { Usercontext } from "../functional/Context/AuthContextFun";



class SubChildClass extends React.Component{

    render() {

        const {logIn,logOut}=this.context;
        return(
            <div>
                <h1>Inside SubChild component</h1>
                <button onClick={()=>{logIn()}}>Login</button>
                <button onClick={()=>{logOut()}}>Logout</button>
            </div>
        )
    }
}
SubChildClass.contextType=Usercontext;
export default SubChildClass;