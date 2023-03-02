import { TextField } from "@material-ui/core"
import { Button } from "@mui/material"

const Login = () =>{
    return (
        <div>
            <TextField fullWidth={true} margin='normal' label="игровое имя" variant="outlined" placeholder="Введите ваш ник"/>
            <TextField fullWidth={true} margin='normal' label="пароль" variant="outlined" placeholder="Введите пароль"/>
            <Button variant="contained">Contained</Button>

        </div>

)
}

export default Login