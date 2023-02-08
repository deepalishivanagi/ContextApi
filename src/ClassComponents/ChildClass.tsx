import React,{Component} from "react"
import { Usercontext } from "../functional/Context/AuthContextFun";
import SubChildClass from "./SubChildClass";



class ChildClass extends React.Component{

    render() {
        const {username,isAuthenticated}:any=this.context;
        return(
            <div>
                <h1>Inside Child component</h1>
                <h1>Inside Child component</h1>
                <h2>User:{username} </h2>
                <h2>Authenticated: {isAuthenticated?"Authenticated":"UnAuthenticated"}</h2>
                <SubChildClass/>
            </div>
        )
    }
}
ChildClass.contextType=Usercontext;
export default ChildClass;
