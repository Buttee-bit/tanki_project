import './App.css';

import {Routes, Route} from 'react-router-dom';
// 
import Home from './components/home';
import RegisterPage from './components/register';
import Login from './components/login';
import Personal_cabinet from './components/personal_cabinet';
import Private_route from './utils/router/private_route';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element= {<Private_route/>}>
          <Route path ='/lk' element = {<Personal_cabinet/>}/>
        </Route>

        <Route path ='/' element = {<Home/>}/>
        <Route path ='/register' element = {<RegisterPage/>}/>
        <Route path ='/login' element = {<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
