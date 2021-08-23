import React from 'react';

import Hostcard from '../template/hostcard';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mk : "Landing PAge" }
    }
    render() { 
        return ( 
            <div>
                <Hostcard/>
            </div>
         );
    }
}
 
export default Landing;