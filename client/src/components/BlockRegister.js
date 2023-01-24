import React from "react";

import './BlockRegister.css';


function BlockRegister(){
    return (
        <div className='BlockRegister'>
        <div>Войти с помощью</div>
        <div className ='YandexAuth'>
            <img className='YandexImage'src='https://avatars.mds.yandex.net/get-lpc/1520633/ef2a27b6-800c-4a83-a864-192193c41b38/orig'></img>
            <div>Яндекс регистрация</div>
            <button>Авторизироваться</button>
          </div>
        <div className ='GoogleAuth'>
            <img className='GoogleImage'src='https://avatars.mds.yandex.net/i?id=6f51ee6483ed915d7545ec5f96df4e1e-5232622-images-thumbs&n=13'></img>
            <div>Google регистрация</div>
            <button>Авторизироваться</button>
        </div>
      </div>
    )
}

export default BlockRegister