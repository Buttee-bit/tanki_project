import { useLocation } from "react-router-dom"
import Login from "./login"
import RegisterPage from "./register"
import { Box } from '@mui/material'
import './style.scss'

const AuthRootComponent = () =>{
    const location = useLocation()
    return(
        <div className="root">
            <div className="form">
            <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    maxWidth={640}
                    margin="auto"
                    padding={5}
                    borderRadius={4}
                    boxShadow={'-3px -2px 20px 1px #202020'}
                >
                    {(location.pathname === '/login' ? <Login/> :location.pathname === '/register' ? <RegisterPage/>: null)}
                </Box>
            </div>
        </div>
    )
}  
export default AuthRootComponent