import { useContext } from "react";
import { Usercontext } from "./Context/AuthContextFun";


function SubChildFun(){

    const {logIn,logOut}=useContext(Usercontext);

    return(
        <div className="main-container">
            <h2>Inside SubChild</h2>
            <button onClick={()=>{logIn()}} className="btn-style">LogIn</button>
            <button onClick={()=>{logOut()}} className="btn-style">LogOut</button>
        </div>
    )
}

export default SubChildFun;