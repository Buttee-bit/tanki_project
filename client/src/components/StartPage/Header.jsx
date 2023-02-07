import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import './Header.css';


const Header = () => {

  const [message, setMessage] = useState('')

  const getMessagefastAPI = async () =>{
      const requestOptions = {
          method: 'GET',
          headers: {
              "Content-Type": "application/json",
            },
      };
      const response = await fetch('http://127.0.0.1:8000/api',requestOptions)
      const data = await response.json();
      console.log(data);

      if(!response.ok){
          console.log('Error: ')
      } else {
          setMessage(data.message);
      }
  };

  useEffect(() => {
      getMessagefastAPI();
  },[]);


    return (

      <div className='header_cont'>
        <div className='container'>
          <div className='header_line'>
            <div className='header_logo'>
              <img src='https://cdn-icons-png.flaticon.com/128/1008/1008178.png'></img>
            </div>

            <div className='header_nav'>
              <a className='nav_item' href = '/startpage'>Главная</a>
              <a className='nav_item' href = '/registration'>Регистрация</a>
              <a className='nav_item' href = '/lk'>Ангар</a>
              <a className='nav_item' href = '/test'>{message}</a>
            </div>

          </div>
        </div>
      </div>
    )
};

export default Header;
