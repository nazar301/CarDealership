import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const RemoveCar = () => {
  // const url = `http://localhost:4000/cars/`
  const url = 'https://dealershipbackend.herokuapp.com/cars'

  const [message, setMessage]= useState('')
  const [errorMessage, setErrorMessage] =useState('')
  const { id } = useParams();
  
//   let handleChange = (e) => {

    // e.preventDefault()
    // setFormState({ ...formState, [e.target.id]: e.target.value });
//   };



  let handleSubmit = (e) => {
    e.preventDefault();
    deleteCar();
  };

  let deleteCar = async () => {
    let data = await fetch(url + id,
        { method: 'DELETE' });
    let json = await data.json();
    
    if (json) {
      console.log(json);
      console.log(url+id)
        
    }

    console.log('removed')
  };

  //   let getCars = async (id) => {
//     let data = await fetch(url+ id);
//     let json = await data.json();
//     if (json) {
//     //   console.log(json);
//       await setFormState(json);
//       await console.log(formState);
//     }
//   };
//   console.log(getCars)

//   useEffect(({getCars, id}) => {
//     getCars(id);
//   }, []);

//   console.log('');

  return (
    <>

      <form onSubmit={handleSubmit}>

        <div>
                <button 
                className='button' 
                id='button' 
                type ='button' 
                onClick={handleSubmit}
                
                >Remove </button>
            </div>
            <div> {message}</div>
              
      </form>
    
      
    </>
  );
};

export default RemoveCar;