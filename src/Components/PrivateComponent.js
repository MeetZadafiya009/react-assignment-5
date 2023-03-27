import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent=()=>{
    let auth=JSON.parse(localStorage.getItem('login'));
    return(
        <>
            {auth ? <Outlet />:<Navigate to='/login' />}
        </>
    )
}
export default PrivateComponent;