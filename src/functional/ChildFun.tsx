import { useContext } from "react";
import { Usercontext } from "./Context/AuthContextFun";



import SubChildFun from "./SubChildFun";


function ChildFun(){

    const {username,isAuthenticated}=useContext(Usercontext);

    return(
        <div className="main-container">
            <h2>Inside Child Component</h2>
            <h3>User:{username} </h3>
            <h3>Authenticated: {isAuthenticated?"Authenticated":"UnAuthenticated"}</h3>
            <SubChildFun/>
        </div>
    )
}

export default ChildFun;