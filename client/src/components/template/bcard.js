import React , {useState } from 'react';
import { Row,Col,Card } from 'react-bootstrap';
import axios from 'axios';




const Bcard =    () => {

    const [post, setpost] = useState([{}])
    
  const gg = async (e) => {
    e.preventDefault();

   try{


    const response = await axios ({
        url: "http://localhost:4000/api/post",
        method: 'get',
    })
    
    // console.log(response.data)
     setpost(response.data);
 


   }catch(err){
    console.log(err);
}
    }


    const redercard = (card,index) => {
        return(

<Row xs={1} md={2} className="g-4">
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{card.name}</Card.Title>
          <Card.Text>
            {card.text}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

</Row>
        )
    }

  

return(
    <div onLoad={gg}>
        <p>{post.map( redercard )}</p>
        {/* <button onClick={gg}> click here</button> */}
    </div>
)

}




export default Bcard ;