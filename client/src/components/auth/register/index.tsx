import { Button, TextField } from "@mui/material";
import React from "react";

const RegisterPage = () =>{
    return (
        <div>
            <TextField fullWidth={true} margin='normal' label="Почта" variant="outlined" placeholder="Введите ваш ник"/>
            <TextField fullWidth={true} margin='normal' label="Игровое имя" variant="outlined" placeholder="Введите игровое имя"/>
            <TextField fullWidth={true} margin='normal' label="Пароль" variant="outlined" placeholder="Пароль"/>
            <TextField fullWidth={true} margin='normal' label="пароль" variant="outlined" placeholder="Повторите пароль"/>
            <Button variant="contained">Contained</Button>
        </div>
    )
}

export default RegisterPage