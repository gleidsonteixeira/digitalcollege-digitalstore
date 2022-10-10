import {Routes, Route} from 'react-router-dom';
import Login from './../components/pages/login';
import Signup from './../components/pages/signup';
import SignupDrip from './../components/pages/signup-drip';
import Orders from '../components/pages/orders';
import Notfound from './../components/pages/notfound';

const Ways = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup-drip" element={<SignupDrip />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<Notfound />} />
        </Routes>
    )
}

export default Ways;