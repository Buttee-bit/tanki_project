import React from 'react';

import './Header.css';


function Header() {
    return (
        <div className='header'>
        <header>
          <img className='LogoHeader' src='https://w7.pngwing.com/pngs/747/697/png-transparent-main-battle-tank-computer-icons-military-tank-rectangle-computer-logo.png' alt = 'картинка '></img>
          
          <div><a>Тапи Танки </a></div>

          <div><a href='#'>Правила</a></div>

          <div><a href='#'>Войти</a></div>
        </header>
      </div>
    )
};

export default Header;