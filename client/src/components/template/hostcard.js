import React from "react";
import {Button,Icon,Card,CardTitle} from "react-materialize";
import { Row,Col } from 'react-bootstrap';





class Hostcard extends React.Component{

  constructor(props) {
    super(props);
    this.state = 
    {
      fname: new Date(),
      fstar : 5 ,
      fcontent : "Lorem ipsum dolor sit amet, consectetur adipiscing elised do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."};
    }

    componentDidMount() {
      this.timerID = setInterval(() => this.tick(),1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        fname: new Date()
      });
    }
  

   

render()
{
 return( 

<div className = "container ">
  <Row>
      <Col md={12} sm={12} lg={6} offset="l3"  >
          <Card
          className="blue-grey darken-1 mcard-title"
          header={<CardTitle image="sampleimg.jpg"> 
            <span className = "black"><span className="">{this.state.fname.toLocaleTimeString()} <br/> <span className="offset-s1  rating">
             {this.state.fstar} <Icon className=" red-text">star_border
             </Icon></span></span></span></CardTitle>}
          closeIcon={<Icon>close</Icon>}
          revealIcon={<Icon>more_vert</Icon>}
          textClassName="white-text"
          >

          {this.state.fcontent}

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
    
  </Row>
</div>









 )


}

}

export default Hostcard ;