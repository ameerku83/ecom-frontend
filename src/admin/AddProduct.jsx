import React from 'react'
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
//import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
const AddProduct = () => {
    const [validated, setValidated] = useState(false);
    const [product,setproduct]=useState({
       productName:"",
       category:"",
       price:"",
        photo:""
    })

    

    const handleSubmit = (event) => {
        event.preventDefault();
      const form = event.currentTarget;

      if (form.checkValidity() === false) {
       
        event.stopPropagation();
        setValidated(true);
      }else{
        
       // console.log('product submited-->',product);
        setValidated(true);

      }
  
   
    }
    const onChangeHandler=(e)=>{
        const {name,value}=e.target;
        if(name==="photo"){
            const photo = e.target.files[0];
            setproduct({...product,[name]:photo});
          console.log('photo----',photo);
        }else{
            setproduct({...product,[name]:value});

        }
       

    }

  return (
    <Container>
        <Row>
            <Col className='text-center'>
            <h2>
                Add product
            </h2>
            </Col>
        </Row>
     <Row className='justify-content-center'>
     <Col md={4} className='my-4 shadow p-3' >
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom01" className='position-relative '>
          <Form.Label>product name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="product name"
            name="productName"
            onChange={onChangeHandler}
          />
          <Form.Control.Feedback type='invalid' tooltip>please enter product name</Form.Control.Feedback>
          <Form.Control.Feedback tooltip>succes</Form.Control.Feedback>

        </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col}  controlId="validationCustom02" >
          <Form.Label>category</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="category"
            name="category"
            onChange={onChangeHandler}
          />
          <Form.Control.Feedback type='invalid'>please enter product category</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col} controlId="validationCustomUsername">
          <Form.Label>price:</Form.Label>
         
            <Form.Control
              type="number"
              placeholder="price"
              aria-describedby="inputGroupPrepend"
              required
              name='price'
              onChange={onChangeHandler}
            />
            <Form.Control.Feedback type="invalid">
              Please choose product price
            </Form.Control.Feedback>
        
        </Form.Group>
        
      </Row>
      <Row>
        <Form.Group as={Col}  controlId="validationCustom02" >
          <Form.Label>photo</Form.Label>
          <Form.Control type="file" name='photo' required   onChange={onChangeHandler}/>
          <Form.Control.Feedback type='invalid'>please chose a photo</Form.Control.Feedback>
        </Form.Group>
        <Button className='mt-3'type="submit">Add product</Button>
        </Row>
     
      </Form>
     
     </Col>
            
        </Row>
    </Container>
  )
}

export default AddProduct