import React, { useState, useEffect } from 'react';

const CarsPage = () => {
  const [cars, setCars] = useState([]);
  const [images, setImages] = useState([])
 
  let getCars = async () => {
    let data = await fetch('http://localhost:4000/cars');
    let json = await data.json();
    setCars(json);
   
  };

  
  useEffect(() => {
    getCars();
  }, []);

  let addCar = (car) => {
    setCars([...cars, car]);
  };


  let deletecar = async (car) => {
    let data = await fetch('http://localhost:4000/cars/' + car._id, {
      method: 'DELETE',
      body: null,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let json = await data.json();
    if (json) {
      let data = cars.map((datum) => {
        if (datum._id === car._id) {
          return json;
        }
        return datum;
      });
      setCars(data);
    }
  }
  console.log(cars)


  return (
    
      
             
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
        </>
      ))}
    </div>
  );
         
}


     

export default CarsPage;
