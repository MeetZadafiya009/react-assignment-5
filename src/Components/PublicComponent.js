import { Navigate, Outlet } from "react-router-dom";

const PublicComponent=()=>{
    let auth = JSON.parse(localStorage.getItem('login'));
    return(
        <>
            {auth?<Navigate to='/'/>:<Outlet />}
        </>
    )
}

export default PublicComponent;