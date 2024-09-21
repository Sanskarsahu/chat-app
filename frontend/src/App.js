
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashbord from './pages/dashbord';
import Login from './pages/login';
import Signup from './pages/signup';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

function App() {
  const{auth}=useAuthContext()
  return (
  <div className=" back h-screen w-screen ">
    <Routes >
     <Route path='/' element={auth ? <Dashbord/> : <Navigate to={"/login"}/>}/>
     <Route path='/login' element={auth ? <Navigate to={"/"}/>:<Login/>}/>
     <Route path='/signup' element={auth ? <Navigate to={"/"}/>: <Signup/>}/>
    </Routes>
   <Toaster/>
  </div>
  );
}

export default App;
