
import React, { useCallback, useEffect, useState } from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'


function ProductDetail() {


const {id}=useParams();
//const [products, setProducts] = useState([])
const [product, setProduct] = useState([])
//const [productFetched, setProductFetched] = useState(false)

// const getProducts=()=>{

//   fetch("./products.json")
//   .then((data)=>data.json())
//   .then((re)=>setProducts(re.products))
//   setProductFetched(true)

// }
//  useEffect(()=>{


//   if(!productFetched){
//     getProducts()
//   }
  
//   if(products.length>0){
//     let res =products.find((product)=>product.id=== Number(id));
//     setProduct(res)

//   }
//  },[id,products])
// console.log('proo-------->',product);
const products =useSelector((state)=>state.products.data)


const getProductDetails= useCallback(async ()=>{
  //const res =await axios.get('./products.json');
 // const products =res.data.products;
  const cuurentProd = products.find((prod)=>prod.id===Number(id))
  setProduct(cuurentProd);
},[id,products])

useEffect(()=>{
  getProductDetails();


},[getProductDetails])


  return (
    <Container>

      <Row className='my-3'>
       
        <Col md={4}>
          <img src={product.image} alt={product.name} />
        </Col>
        <Col md={8}>
        <ListGroup>
      <ListGroup.Item>
        <h4>
          {product.name}
          </h4>
      </ListGroup.Item>
      <ListGroup.Item>
        <h4>
         {product.price}
          </h4>
      </ListGroup.Item>
      <ListGroup.Item>
        {product.description}
      </ListGroup.Item>
      <ListGroup.Item> <b> brand :{product.brand}</b> </ListGroup.Item>
      <ListGroup.Item><b> category :</b> {product.category} </ListGroup.Item>
      <ListGroup.Item><b> stock :</b> {product.stock} </ListGroup.Item>
    </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail