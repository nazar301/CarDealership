import NavBar from './components/NavBar';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import CustomOrder from './components/CustomOrder';
import Profile from './components/user/Profile';
import UserSignup from './components/user/UserSignup';
import CarsPage from './components/CarsPage'
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (<div>
    <div className='NavBar'><NavBar/></div>
      <Routes>
          <Route path='/' element={<LandingPage/>}>Home</Route>
          <Route path='/CustomOrder' element={<CustomOrder/>}>Special Order</Route>      
          <Route path='/Cars' element={<CarsPage/>}>Cars</Route>
          <Route path='/Profile' element={<Profile/>}>Profile</Route>
          <Route path='/Signup' element={<UserSignup/>}>Signup</Route>
      </Routes>
      <div>

        <Footer/>
      </div>
    </div>
  );
}

export default App;
