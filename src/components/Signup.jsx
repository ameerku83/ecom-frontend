import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { Container } from 'react-bootstrap';

const Signup = () => {

    const { Formik } = formik;

    const schema = yup.object().shape({
      fullName: yup.string().required(),
      email: yup.string().required(),
      phone:yup.number().required("please enter phone number").positive().test("leng",'phone number shuold be 10 digit',(value)=>{
        if(String(value).length===10){
          return true
        }else{
          return false
        }

      } ),
      password: yup.string().required().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[a-zA-Z]{8,}/,"password should contain minimum 8 and small ,capital"),
      conformPassword: yup.string().required().oneOf([yup.ref('password'),null],"must match"),
      
    });

    

  return (
    <Container>
    <Row>
        <Col className='text-center'>
        <h2>
            sign up
        </h2>
        </Col>
    </Row>
 <Row className='justify-content-center '>
 <Col md={4} className='my-4 shadow p-3' >
 <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        fullName: '',
        email: '',
        phone:"",
        password: '',
        conformPassword: '',
      
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group  md="4" controlId="validationFormik01" className=' position-relative'>
              <Form.Label>Fullname</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                isInvalid={ !!errors.fullName}
              />
              <Form.Control.Feedback type='invalid' tooltip> enter full name...! </Form.Control.Feedback>
            </Form.Group>
            <Form.Group  controlId="validationFormik02" className=' position-relative'>
              <Form.Label>email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={ !!errors.email}
              />

              <Form.Control.Feedback type='invalid' tooltip> enter valid email</Form.Control.Feedback>
            </Form.Group>
            <Form.Group  controlId="validationFormik02" className=' position-relative'>
              <Form.Label>phone</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                isInvalid={ !!errors.phone}
              />

              <Form.Control.Feedback type='invalid' tooltip> phone number should be 10 digit</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationFormikUsername" className=' position-relative'>
              <Form.Label>password</Form.Label>
            
                <Form.Control
                  type="text"
                  placeholder="password"
                  
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                 enter same password
                </Form.Control.Feedback>
              
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group  controlId="validationFormik03" className=' position-relative'>
              <Form.Label>conform password</Form.Label>
              <Form.Control
                type="text"
                placeholder="conform password"
                name="conformPassword"
                value={values.conformPassword}
                onChange={handleChange}
                isInvalid={!!errors.conformPassword}
              />

              <Form.Control.Feedback type="invalid" tooltip>
               enter same password
              </Form.Control.Feedback>
            </Form.Group>
           
          </Row>
         
          <Button type="submit">Sign up</Button>
        </Form>
      )}
    </Formik>

 
 </Col>
        
    </Row>
</Container>
  )
}

export default Signup