import React, { Fragment, useState ,useEffect} from 'react';
import axios from 'axios';
import {Button,Icon,Row,Col,Card,CardTitle} from "react-materialize";
import  _ from 'lodash';



const JCards = () => {

  const [post, setpost] = useState([{
      name:"Wait ..... "
    }]);

    const [like, setLike] = useState({
       boxClass  :  false
    }) 


    useEffect(async () => {  
    
       try{       
          const response = await axios ({
              url: "http://localhost:4000/api/post",
              method: 'get',           
          })        
                // console.log(response.data)
                setpost(response.data);
                console.log(response.data)
       }
       catch(err)
       {
        console.log(err);
      }
             
      return() =>{}
    },[])

    



    const redercard = (card,index) => {
        return(
          <div className="card" >
          <div className="card-body">
      
            <a  className = "share-icon" href = "whatsapp://send?text=http://www.mighty/categories/<%= abc.newcategory %>"><ion-icon name="share-social-outline"></ion-icon></a>
            <h5 className="card-align card-title">{card.posttitle}  </h5>
            <img className="card-img-top" src="https://www.wpbeginner.com/wp-content/uploads/2018/07/whatisblog.png"  alt="..."/>
            <div className = "card-block">
            <p className="card-align card-text">  {card.postcontent} <span className="card-dot">...............</span> <a className = "read-more" href= {"category/"+_.lowerCase(card.postcategory)+'/'+card._id}> Read More    </a></p>
          </div> 
          <ul class="list-inline">
            <li><h6 className="card-clip"> <i className=  { like.boxClass === false ? 'far fa-heart' : 'fas fa-heart'}  onClick={() => setLike( { boxClass : !like.boxClass } )} ></i> {_.size(card.likes)} </h6></li>
            <li> <a href = {"category/"+_.lowerCase(card.postcategory)} ><h6 className="card-clip"> <Icon>local_offer</Icon> {card.postcategory} </h6></a></li>
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
    <div  className = "card-holder"  >
      <div className="post-toggle"><h1 className = "holder-title"> Recent  Post <span className= "drop-icon" ><ion-icon   name="caret-down-outline"></ion-icon></span></h1> </div> 

        <p>{post.map( redercard )}</p>
        {/* <button onClick={gg}> click here</button> */}
    </div>
)

}




export default JCards ;










          
        
