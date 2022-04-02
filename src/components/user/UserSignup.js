import React, {useEffect, useState} from "react";
import {Form, Button} from 'react-bootstrap'

function UserSignup() {
  const initialState = {
        email: '',
        username: '',
        password: '',
        verifyPassword: '',
        valid: null
  }
  const [formState, setFormState] = useState(initialState)
  const [message, setMessage] = useState('')
  
  let SignUp = () => {
   
    
        
    const requestData = {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            email: formState.email,
            username: formState.username,
            password: formState.password,
            verifyPassword: formState.verifyPassword,

          }),
          
        };
        

        fetch('https://dealershipbackend.herokuapp.com/session/register', requestData)
        
          .then((data) => data.json())
          .then((parsedData) => {
            console.log(parsedData);
            setFormState(parsedData);
            
          })
          .catch((err) => {
            
            console.log(err);
          });
  }

      const handleChange = (e) => {
        setFormState({
          ...formState,
          [e.target.id]: e.target.value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (formState.password === formState.verifyPassword) {
          formState.valid = true;
          setMessage(`welcome ${formState.username}`);
          console.log(message);
          SignUp();
        } else {
          formState.valid = false;
          setMessage(`passwords do not match`);
          console.log(message);
        }
        setFormState(initialState);
      };

        return (
      <div>
          UserSignup
          <form onSubmit={handleSubmit}>
              <input type='text' 
              placeholder='username' 
              id='username' 
              value={formState.username}
              onChange={handleChange}
              />

              <input
              type='text'
              placeholder='Email'
              id='email'
              value= {formState.email}
              onChange={handleChange}
              />

              <input
              type='password'
              placeholder='password'
              id='password'
              value={formState.password}
              onChange={handleChange}
              />

              <input
              type='password'
              placeholder='verifyPassword'
              id='verifyPassword'
              value={formState.verifyPassword}
              onChange={handleChange}
              />

              {formState.password === formState.verifyPassword ? (
                  <div>
                      <button 
                      className='button' 
                      id='button' 
                      type ='button' 
                      onClick={handleSubmit}
                      >SignUp</button>
                  </div>
              ) : (
                  <div>
                      <h2 color='red'>Passwords must match</h2>
                  </div>    
              )}


          </form>
          {/* <Form onSubmit={handleSubmit}>
             <Form.Group className="login" id="loginUsername">
                 <Form.Label>Username</Form.Label>
                 <Form.Control type="Username" placeholder="Username" />
             </Form.Group>

             <Form.Group className="login" id="loginUsername">
                 <Form.Label>Username</Form.Label>
                 <Form.Control type="Username" placeholder="Username" />
             </Form.Group>

             <Form.Group className="login" id="loginUserPassword">
                 <Form.Label>Password</Form.Label>
                 <Form.Control type="password" placeholder="Password" />
             </Form.Group>

             <Form.Group className="login" id="loginUsername">
                 <Form.Label>Username</Form.Label>
                 <Form.Control type="Username" placeholder="Username" />
             </Form.Group>
            
             <Button 
             variant="primary" 
             type="submit" 
             onClick={handleSubmit}>
                {message}
             </Button>
         </Form> */}
      </div>
        );
    
}

export default UserSignup