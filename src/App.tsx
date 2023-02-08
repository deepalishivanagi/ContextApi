import React,{Component} from "react"
// import Child from "./Child";
import AuthProvider from "./Context/AuthContext";

class App extends React.Component{

  render() {
    return(
      <div>
        <h1>Inside parent component</h1>
        <AuthProvider>
        {/* <Child/> */}
        </AuthProvider>
     

      </div>
    )
  }
}

export default App;