import {Container} from "react-bootstrap"
import Baner from "../components/Baner"
import LatestProducts from "../components/LatestProducts";


function Home(){



  


  

  // const [products,setProducts]=useState([])

  // useEffect(()=>{
  //   fetch("./products.json")
  //   .then((data)=>data.json())
  //   .then((res)=>setProducts(res.products))
  // },[])


    return(
      <>
     < Baner/>
        <Container>
          <LatestProducts/>
        </Container>

        </>
        
    )
    
}

export default Home








































