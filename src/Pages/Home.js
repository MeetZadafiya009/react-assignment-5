import './../style/bootstrap.css';
import './../style/style.css';
import { useEffect } from "react";

const Home=()=>{
    let auth=JSON.parse(localStorage.getItem('login'));
    useEffect(()=>{
      
    },[]);
    return(
        <>
            <h1 className='text-center'>{auth.fname} {auth.lname}</h1>
        </>
    )
}
export default Home;