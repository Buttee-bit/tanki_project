import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import RegisterPage from './components/RegisterPage/RegisterPage';
import LkPage from './components/LKabinetPage/LkPage';
import StartPage from './components/StartPage/StartPage';

const App = ()=> {
  return (
    <BrowserRouter>
    <div className='app'>

          <Routes>
            <Route path ='/registration' element = {<RegisterPage/>}/>
            <Route path ='/lk' element = {<LkPage/>}/>
            <Route path ='/startpage' element = {<StartPage/>}/>
          </Routes>

    </div>
    </BrowserRouter>
  );
}


export default App;

