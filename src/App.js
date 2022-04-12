
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';
import auth from './firebase.init';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/shop' element={
          <RequireAuth>
            <Shop></Shop>
          </RequireAuth>
        }></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        {
          user ? '' : <Route path='/login' element={<Login></Login>}></Route>
        }
        <Route path='' element></Route>
      </Routes>
    </div>
  );
}

export default App;
