import {Routes, Route} from 'react-router-dom';
import Login from './../pages/login';
import Signup from './../pages/signup';
import SignupDrip from './../pages/signup-drip';
import Orders from '../pages/orders';
import Notfound from './../pages/notfound';
import Home from '../pages/home';
import Categories from '../pages/categories';
import Products from '../pages/products';

const Ways = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup-drip" element={<SignupDrip />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<Notfound />} />
        </Routes>
    )
}

export default Ways;