import React, {  useState } from 'react';
import axios from 'axios';
import {Button,Icon,Row,Col,Card,CardTitle} from "react-materialize";




const Profile =    () => {

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
          <div className = "container ">
         
          <Row>
            <div className = "cholder">
        
              <Col m={12} s={12} l={12} offset="l3"  >
                  <Card
                  className="blue-grey darken-1 mcard-title"
                  header={<CardTitle image="sampleimg.jpg"> 
                    <span className = "black"><span className="">{card.name} <br/> <span className="offset-s1  rating">
                     5 <Icon className=" red-text">star_border
                     </Icon></span></span></span></CardTitle>}
                  closeIcon={<Icon>close</Icon>}
                  revealIcon={<Icon>more_vert</Icon>}
                  textClassName="white-text"
                  >
        
                  {card.text}
        
              <Row>
                <div className = "card-action center  ">
                  <Col s={3}>
                    <Button className = "btn-small" node="button" waves="light"> Show More 
                    <Icon left> restaurant </Icon>
                    </Button>
                  </Col>
                  <Col s={3} push="s5">
                    <Button className = "btn-small "  node="button" waves="light"> Order Now  
                    <Icon left> local_shipping </Icon>
                    </Button>
                  </Col>
                </div>
              </Row>
              </Card>
              </Col>
            </div>
          </Row>
        </div>
        )
    }

  

return(
    <div onLoad={gg}>
        <p>{post.map( redercard )}</p>
        {/* <button onClick={gg}> click here</button> */}
    </div>
)

}




export default Profile ;