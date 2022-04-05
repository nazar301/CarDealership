import {  useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const EditCar = (cars) => {
  // const url = `http://localhost:4000/cars/`
  const url ='https://dealershipbackend.herokuapp.com/cars/'

  const initialState = { 
    make: '', 
    model: '', 
    color: '', 
    bodyStyle: '', 
    year: '', 
    milage: '', 
    description: ''
  };
  

  const [formState, setFormState] = useState(initialState);
  const [message, setMessage] =useState('')
  const { id } = useParams();
  
  let handleChange = (e) => {
    //e.preventDefault()
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    editcar(formState);
  };

  let getCars = async (id) => {
    let data = await fetch(url + id);
    let json = await data.json();
    if (json) {
      // console.log(json);
      await setFormState(json);
      // await console.log(formState);
    }
  };
  // console.log(getCars)

  useEffect(() => {
    getCars(id);
  }, []);


  const requestData = {
    method: 'PUT',
    body: JSON.stringify({
        make: formState.make, 
        model: formState.model, 
        color: formState.color, 
        bodyStyle: formState.bodyStyle, 
        year: formState.year, 
        milage: formState.milage, 
        description: formState.description
    }),
    headers: {
      'Content-Type': 'application/json',

    },
    
  };

  let editcar = async () => {
    let data = await fetch(url + id, requestData);
    let json = await data.json();
    if (json) {
      console.log(json);
      console.log(url+ id)
    }
    setMessage(`car details changed ${formState.make}`);
    console.log('edited')
  };

//   console.log(formState);

  return (
    <>
      <form onSubmit={handleSubmit}>
              <input type='text' 
              placeholder='make' 
              id='make' 
              value={formState.make}
              onChange={handleChange}
              />

              <input
              type='text'
              placeholder='model'
              id='model'
              value= {formState.model}
              onChange={handleChange}
              />

              <input
              type='text'
              placeholder='color'
              id='color'
              value= {formState.color}
              onChange={handleChange}
              />

              <input
              type='text'
              placeholder='bodyStyle'
              id='bodyStyle'
              value= {formState.bodyStyle}
              onChange={handleChange}
              />

              <input
              type='text'
              placeholder='year'
              id='year'
              value= {formState.year}
              onChange={handleChange}
              />
               
              <input
              type='text'
              placeholder='milage'
              id='milage'
              value= {formState.milage}
              onChange={handleChange}
              />
              <input 
              type='text'
              placeholder='description'
              id='description'
              value={formState.description}
              onChange={handleChange}
              />

        <div>
                <button 
                className='button' 
                id='button' 
                type ='button' 
                onClick={handleSubmit}
                >Edit
                 </button>
            </div>
              <div>{message}</div>

      </form>
    
      
    </>
  );
};

export default EditCar;