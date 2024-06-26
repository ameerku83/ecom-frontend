import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import"./contact.css"

function Contact() {
 

const [contactFormData,setContactFormData]=useState({
  fullname:"",
  email:"",
  phone:"",
  message:""
})
const [errors,seterror]=useState({
  fullname:"",
  email:"",
  phone:"",
  message:""
})

function validateForm(){
  let valid=true
  let newError={
    fullname:"",
  email:"",
  phone:"",
  message:""
  }
  if(!contactFormData.fullname.trim()){
    newError.fullname="....!!!!!"
    valid=false
  }
  if(!contactFormData.email.trim()){
    newError.email="email reaquired"
    valid=false
  }else if(!/\S+@\S+\.\S+/.test(contactFormData.email)){
    newError.email="enter valid email"
    valid=false

  }
  if(!contactFormData.phone.trim()){
    newError.phone="enter phone "
    valid=false
  }else if(!/^\d{10}$/.test(contactFormData.phone)){
    newError.phone="phone number must be 10 digit"
    valid=false

  }
  if(!contactFormData.message.trim()){
    newError.message="enter message "
    valid=false
  }

  seterror(newError)
  return valid
}

const handleSubmit= (e)=>{
  e.preventDefault()
  if(validateForm()){

  }

}
const onChangeHandler = (e)=>{

  const {name,value}= e.target
  setContactFormData({...contactFormData,[name]:value})

}


  return (
  <Container>
    <Row className='justify-content-center'>
      <Col md={6}>
      <div className='shadow bg-white p-4 m-4'>
        <form className='form-container my-3' onSubmit={handleSubmit}>
          <input type="text" name="fullname" placeholder='please enter your fullname' onChange={onChangeHandler}/>
          <span> {errors?.fullname ?? ''} </span>
          <input type="email" name="email" placeholder='please enter your email' onChange={onChangeHandler}/>
          <span> {errors?.email ?? ''} </span>
          <input type="number" name="phone" placeholder='please enter phone' onChange={onChangeHandler} />
          <span > {errors?.phone ?? ''} </span>
          <textarea rows={5} type="text" name="message" placeholder='please enter  message' onChange={onChangeHandler} >
            </textarea>
            <span> {errors?.message ?? ''} </span>
            <button>send message</button>
        </form>
      </div>
      </Col>
    </Row>


  </Container>
    

    
    
   

  )
}

export default Contact