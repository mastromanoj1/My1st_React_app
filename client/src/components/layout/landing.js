import React from 'react';
// import Hostcard from '../template/hostcard';
import Homepage from '../template/homepage';






class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mk : "Landing PAge" }
    }
    render() { 
        return ( 
            <div>
                <Homepage/>
            </div>
         );
    }
}
 
export default Landing;