import React from "react";
// import {Button,Icon,Row,Col,Card,CardTitle} from "react-materialize";





class Profile extends React.Component{

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
  Today
</div>









 )


}

}

export default Profile ;