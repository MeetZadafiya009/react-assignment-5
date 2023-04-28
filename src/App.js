import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Auth/Signup';
import Login from './Pages/Auth/Login';
import HeaderComponent from './Components/HeaderComponent';
import PrivateComponent from './Components/PrivateComponent';
import Products from './Pages/product/Products';
import Password from './Pages/Auth/Password';
import { Toaster } from 'react-hot-toast';
import Error from './Pages/404/Error';
import PublicComponent from './Components/PublicComponent';
import Cart from './Pages/product/Cart';
import { Suspense, lazy } from 'react';
const Profile=lazy(()=>import('./Pages/Auth/Profile'));
const Product=lazy(()=>import('./Pages/product/Product'));
function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path='/' element={<Products />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/change-password' element={<Password />} />
          </Route>
          <Route element={<PublicComponent />}>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Route>
          <Route path='/*' element={<Error />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </Suspense>

  );
}

export default App;
