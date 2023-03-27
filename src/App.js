import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import HeaderComponent from './Components/HeaderComponent';
import Profile from './Pages/Profile';
import PrivateComponent from './Components/PrivateComponent';
import Products from './Pages/Products';
import Product from './Pages/Product';
import Password from './Pages/Password';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/change-password' element={<Password />} />
        </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
