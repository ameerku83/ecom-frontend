import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import SingleProduct from './SingleProduct'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/productSlice'

function LatestProducts() {
    const dispatch=useDispatch()

    const products =useSelector((state)=>state.products.data)



  //const [products,setProducts]=useState([])

  useEffect(()=>{
    fetch("./products.json")
    .then((data)=>data.json())
    .then((res)=>dispatch(getProducts(res.products)))
    
  })


  return (
<>
    <Row>
        <Col  className="my-3">
            <h1>Latest products</h1>
        </Col>
    </Row>
     <Row >
            
     {products && products.map((product,index)=>(
       <SingleProduct key={index} product={product} />///props

     ))}
      
    </Row>
 </>
  )
}

export default LatestProducts