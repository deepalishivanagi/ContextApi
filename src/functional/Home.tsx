import { useEffect } from "react";
import ChildFun from "./ChildFun";
import  ContextProvider,{Usercontext}  from "./Context/AuthContextFun";


function Home(){

    useEffect(()=>{
        const data = { username: 'kminchelle', password: "0lelplR"};

            fetch("https://dummyjson.com/auth/login", {
            method: 'POST', // or 'PUT'
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    })

    return(
        <div className="main-container">
            <h1>Inside parent functional component</h1>
            <ContextProvider>
            <ChildFun/>
            </ContextProvider>
            
        </div>
    )
}

export default Home;