import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


function CustomOrder () {

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
  const [message, setMessage] = useState();

  let addCar = () => {
   
        const requestData = {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            make: formState.make, 
            model: formState.model, 
            color: formState.color, 
            bodyStyle: formState.bodyStyle, 
            year: formState.year, 
            milage: formState.milage, 
            description: formState.description, 
          }),
          
        };
        

        fetch('http://localhost:4000/cars', requestData)
          
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
        // console.log('submit running');
        setMessage(`car added ${formState.make}`);
        setFormState({ ...formState});
        addCar();
      };



  return (
    <div>
      <div>
        <h2>Welcome to Cars and Car. This is how it works.</h2>
        <p>1. You figure out exactly what late model car you want to purchase. 2016 models or newer with less than 60,000 miles.</p>
        <p>2. It will be purchased wholesale at the actual cost plus $700. That's it. No bogus fees.</p>
        <p>3. You will see the bill of sale from the wholesale auction, the related receipts, and everything else that constitutes full disclosure for the specific vehicle that interests you.</p>
        <p>4. The vehicle will receive a post-sale inspection to verify its physical and mechanical condition after the purchase along with a warranty that extends to 21 days and 250 miles. We purchase vehicles all over the United States and can even arrange for the vehicle to be transported directly to your home or business.</p>
      </div>
    
      <Form onSubmit={handleSubmit} id='CreateOrder'> 
        <Form.Group className="SpecialOrder" id="Make">
          <Form.Label>Make</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Enter desired manufacturer" 
          value={formState.make}
          onChange={handleChange}
          />
        </Form.Group>
        
        <Form.Group className="SpecialOrder" id="Model">
          <Form.Label>Model</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Enter desired model" 
          value={formState.model}
          onChange={handleChange}
          />
        </Form.Group>
        
        <Form.Group className="SpecialOrder" id="Color">
          <Form.Label>Color</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Enter desired color/'s" 
          value={formState.color}
          onChange={handleChange}
          />
        </Form.Group>
        
        <Form.Group className="SpecialOrder" id="Bodystyle">
          <Form.Label>Bodystyle</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Enter bodystyle" 
          value={formState.bodyStyle}
          onChange={handleChange}
          />
        </Form.Group>
        
        <Form.Group className="SpecialOrder" id="Year">
          <Form.Label>Year</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Enter desired year/'s" 
          value={formState.year}
          onChange={handleChange} 
          />         
        </Form.Group>
        
        <Form.Group className="SpecialOrder" id="Milage">
          <Form.Label>Milage</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Enter desired milage" 
          value={formState.milage}
          onChange={handleChange}  
          />    
        </Form.Group>
        
        <Form.Group className="SpecialOrder" id="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Enter any other details or specifications" 
          value={formState.make}
          onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>

      {/* <form onSubmit={handleSubmit}>
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
                >Add Car</button>
            </div>
              
      </form> */}


    </div>

  );
};

export default CustomOrder;
