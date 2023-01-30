import React from 'react';

import './Header.css';


function Header() {
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
            </div>

          </div>
        </div>
      </div>
    )
};

export default Header;
