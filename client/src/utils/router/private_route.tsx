import {Outlet, Navigate} from 'react-router-dom'


const Private_route = () =>{
    const auth = true
    return (
        auth ? <Outlet/>: <Navigate to = 'login' />
        );
}
export default Private_route