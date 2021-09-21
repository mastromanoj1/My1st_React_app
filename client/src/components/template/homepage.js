import React from 'react';
import { Row,Col } from 'react-bootstrap';
// import Profile from '../post/profile';
// import Hostcard from '../template/hostcard';
import JCards from '../template/jcard'
import Quicklink from './quicklink';


class Homepage extends React.Component {
    render() { 
        return(
                <Row >
                <Col sm={12} lg={9} className = " ">
                <JCards/>   
                </Col>
                <Col lg={3} className="red hide-on-small-only">
                   <Quicklink/> 
                </Col>
                </Row>
                
        )
    }
}
 
export default Homepage;