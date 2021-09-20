import React, { Fragment, useState } from 'react';
import axios from 'axios';
import {Button,Icon,Row,Col,Card,CardTitle} from "react-materialize";



const JCards = () => {

    const [post, setpost] = useState([{
      name:"Wait ..... "
    }])
    
  const gg = async (e) => {
    e.preventDefault();

   try{


    const response = await axios ({
        url: "http://localhost:4000/api/post",
        method: 'get',
        
    })
    
    // console.log(response.data)
     setpost(response.data);
     console.log(response.data)
 


   }catch(err){
    console.log(err);
}
    }


    const redercard = (card,index) => {
        return(
          <div className="card" >
          <div className="card-body">
      
            <a  className = "share-icon" href = "whatsapp://send?text=http://www.mighty/categories/<%= abc.newcategory %>"><ion-icon name="share-social-outline"></ion-icon></a>
            <h5 className="card-align card-title">{card.posttitle}  </h5>
            <img className="card-img-top" src="https://www.wpbeginner.com/wp-content/uploads/2018/07/whatisblog.png"  alt="..."/>
            <div className = "card-block">
            <p className="card-align card-text">  {card.postcontent} <span className="card-dot">...............</span> <a className = "read-more" href="/contact"> Read More    </a></p>
          </div> 
          <ul class="list-inline">
            <li><h6 className="card-clip"> <Icon>favorite_border</Icon> &totallike </h6></li>
            <li> <a href = "/contact" ><h6 className="card-clip"> <Icon>local_offer</Icon> {card.postcategory} </h6></a></li>
            <li><h6 className="card-clip"> <Icon>share</Icon>  &share</h6></li>
          </ul>
           </div>
        
          {/* <ul className="list-group list-group-flush">
            <div className = "arrange">
            <li className="list-group-item"> <ion-icon name="calendar"></ion-icon></ion-icon> : abc.newdate %> </li>
            <li className="list-group-item"> <ion-icon name="person"></ion-icon> : <%= abc.newauthor %></li>
            <li className="list-group-item"><a href="/categories/<%= abc.newcategory %>  "><ion-icon name="pricetag"></ion-icon> : <%= abc.newcategory %></a></li>
            </div>
          </ul> */}
        </div> 
        )
    }

  

return(
    <div  className = "card-holder"  onLoad={gg}>
      <div className="post-toggle"><h1 className = "holder-title"> Recent  Post <span className= "drop-icon" ><ion-icon   name="caret-down-outline"></ion-icon></span></h1> </div> 

        <p>{post.map( redercard )}</p>
        {/* <button onClick={gg}> click here</button> */}
    </div>
)

}




export default JCards ;










          
        
