import './App.css';

import BlockRegister from './components/BlockRegister';
import Header from './components/Header';
import UserList from './components/UserList';

function App() {
  return (
    <div className='Page'>
      <Header></Header>

      <BlockRegister></BlockRegister>
      
      <UserList></UserList>
    </div>
  );
}


export default App;

