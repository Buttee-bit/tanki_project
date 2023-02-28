import {Routes, Route} from 'react-router-dom';
// 
import Home from './components/home';
import Personal_cabinet from './components/personal_cabinet';
import Private_route from './utils/router/private_route';
import AuthRootComponent from './components/auth';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element= {<Private_route/>}>
          <Route path ='/lk' element = {<Personal_cabinet/>}/>
        </Route>

        <Route path ='/' element = {<Home/>}/>
        <Route path ='/register' element = {<AuthRootComponent/>}/>
        <Route path ='/login' element = {<AuthRootComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
