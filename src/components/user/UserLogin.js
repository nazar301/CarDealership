import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";


const UserLogin = () => {
  const initialState = useState({
      username: '',
      password: '',
      userToLogin: false,

  })
  const [user, setUser] = useState('')
  const [formState, setFormState] = useState(initialState)
  const [userToLogin, setUserToLogin] = useState()
  const [message, setMessage] = useState()
  const [loggedIn, setIsLoggedIn] = useState()

//   const login= () => {
//     const userLoggedIn = {
//         method: 'POST',
//         username: { 'content-type': 'application/json'},
//         body: JSON.stringify({ username: ''}),
//     }
//     fetch('http://localhost:4000/session/login', userLoggedIn)
//         .then((data) => data.json())
//         .then((parsedData)=>{
//             console.log(parsedData)
//             setUser(parsedData)
//         })
//   }

const login = async () => {
    // console.log('login is running');
    try {
      const requestData = {
        method: 'POST',
        // credentials: 'include',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          username: formState.username,
          password: formState.password,
        }),
        
      };
      const loginResponse = await fetch('https://dealershipbackend.herokuapp.com/login', requestData);
      const loginJson = await loginResponse.json();
      // console.log(loginJson);
      // console.log(loginResponse)


      if (loginJson.loggedIn) {
        setIsLoggedIn(loginJson.loggedIn);
        setUserToLogin(loginJson.user);
        setMessage(`Welcome  ${userToLogin.username}`);
        console.log('login running')
      }

      (await loginJson.loggedIn) ? setIsLoggedIn(true) : setIsLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

    const handleChange = (e) => {
      console.log('handlechange')
        setFormState({
          ...formState,
          [e.target.id]: e.target.value,
        });
      };
    
     
      const handleSubmit = (e) => {
        console.log('handlesubmit')
        e.preventDefault();
        setFormState({ ...formState });
        login();
       
      };

  return (

    <div>
        {/* <Form onSubmit={handleChange}>
            <Form.Group className="login" id="loginUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="Username" placeholder="Username" />
            </Form.Group>

            <Form.Group className="login" id="loginUserPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button 
            variant="primary" 
            type="submit" 
            onClick={handleSubmit}>
                {message}
            </Button>
        </Form> */}

        <form onSubmit={handleSubmit} className='form'>
        <div className='logInForm'>
          <input
            name='username'
            type='text'
            id='username'
            placeholder='Username'
            value={formState.username}
            onChange={handleChange}
          />
          
        </div>

        <div className='logInForm'>
          <input
            name='password'
            type='password'
            id='password'
            placeholder='Password'
            value={formState.password}
            onChange={handleChange}
          />
          
          
        </div>

        
        <button
          className='button'
          type='button'
          onClick={handleSubmit}
        >
          
          <div className='text'>Log In</div>
        </button>
       

       
      </form>
    </div>
    
  );
}

export default UserLogin