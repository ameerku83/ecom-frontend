
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'




const SingleProduct = ({product}) => {
  return (
    <Col  className="mb-3" md={4}>
             <Card >
       <Card.Img variant="top" src={product.image} />
       <Card.Body>
         <Card.Title>{product.name}</Card.Title>
         <Card.Text>
         <b> {product.price}</b><br/>
         {product.description}
         </Card.Text>
         
         <Button variant="primary" as={Link} to={`/${product.id}`}> More info </Button>
       </Card.Body>
     </Card>
             </Col>
  )
}

export default SingleProduct