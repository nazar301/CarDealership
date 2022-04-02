import NavBar from './components/NavBar';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import CustomOrder from './components/CustomOrder';
import Profile from './components/user/Profile';
import UserSignup from './components/user/UserSignup';
import CarsPage from './components/CarsPage'
import EditCar from './components/EditCar';
import RemoveCar from './components/RemoveCar';
import { Fragment } from 'react';

// import Footer from './components/Footer';



function App() {


  return (<div>
    <div className='NavBar'><NavBar/></div>
      <Routes>
          <Route path='/' element={<LandingPage/>}>Home</Route>
          <Route path='/CustomOrder' element={<CustomOrder/>}>Special Order</Route>      
          <Route path='/Cars' element={<CarsPage/>}>Cars</Route>
          <Route path='/Profile' element={<Profile/>}>Profile</Route>
          <Route path='/Signup' element={<UserSignup/>}>Signup</Route>
          <Route path={`/cars/:id`}
              element={
                <Fragment>
                    <EditCar/>
                    <RemoveCar/>
                </Fragment>          
              }></Route>
      </Routes>
      <div>

        {/* <LandingPage/> */}
        {/* <CarsPage/> */}
        {/* <EditCar/> */}
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;
