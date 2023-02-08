import React,{Component} from "react"
import ContextProvider from "../functional/Context/AuthContextFun";
import ChildClass from "./ChildClass";



class HomeClass extends React.Component{

  render() {
    return(
      <div>
        <h1>Inside parent component</h1>
        <ContextProvider>
            <ChildClass/>
        </ContextProvider>
      </div>
    )
  }
}

export default HomeClass;