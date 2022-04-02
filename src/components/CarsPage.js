import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditCar from './EditCar';
import RemoveCar from './RemoveCar';

const CarsPage = () => {
  const [cars, setCars] = useState([]);
  const [images, setImages] = useState([])
  // const carList = cars.map((cars, index) => key={index} {make})
  // const identifier = cars.map(((car)=> car._id)

  // )
  
  let getCars = async () => {
    let data = await fetch(
      'https://dealershipbackend.herokuapp.com/cars'
      // 'http://localhost:4000/cars'
      );
    let json = await data.json();
    setCars(json);
  };


  useEffect(() => {
    getCars();
  }, []);


  return (
    
    <div>
        
    <div className='container'>
      {cars.map((car) => (
             
        <>
          
          <div className='row' key={car._id}>
            <div className='col-sm'>Make</div>
            <div className='col-sm'>{car.make}</div>
          </div>
          <div className='row'>
            <div className='col-sm'>Model</div>
            <div className='col-sm'>{car.model}</div>
          </div>
          <div className='row'>
            <div className='col-sm'>Body style</div>
            <div className='col-sm'>{car.bodyStyle}</div>
          </div>
          <div className='row'>
            <div className='col-sm'>Color</div>
            <div className='col-sm'>{car.color}</div>
          </div>
          <div className='row'>
            <div className='col-sm'>Year</div>
            <div className='col-sm'>{car.year}</div>
          </div>
          <div className='row'>
            <div className='col-sm'>Description</div>
            <div className='col-sm'>{car.description}</div>
          </div>
          <Link to={`/cars/${car._id}`} > {car.make} </Link> 
                
          {/* <EditCar/>  */}
          {/* <RemoveCar/> */}
        </>
        
      ))}
    </div>
        <div className='background'>
        {/* <img src={require('../images/Lot.jpg')} alt='lot'/> */}
        </div>
    </div>
  );
         
}


     

export default CarsPage;
