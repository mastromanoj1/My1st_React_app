import React,{useState,useEffect} from 'react';
import {Button,Icon,Row,Col,Card,CardTitle} from "react-materialize";
import  _ from 'lodash';
import axios from 'axios';
import {useParams} from "react-router-dom";



const Postpage = () => {

    const [post, setpost] = useState({
      postcategory : "wait",
    })
    const id = useParams().id;

  useEffect( async (e) => {
 
     try{
  
  
      const response = await axios ({
          //get a post 
          url: "http://localhost:4000/api/post/"+id,
          method: 'get',
          
      })
      
      console.log(response.data)
       setpost(response.data);
  
     }catch(err){
      console.log(err);
  }
    
    return () => {}
  },[])

    
    



   

  

return(

    <div  className = "card-holder container" >
      <div className="post-toggle"><h1 className = "holder-title"> Post page <span className= "drop-icon" ><ion-icon   name="caret-down-outline"></ion-icon></span></h1> </div> 
          <div className = "postpage" >
          <p>{post.posttitle}</p> 
          <p>{post.postcontent}</p> 
            <ul class="list-inline">
              <li><h6 className="card-clip"> <Icon>favorite_border</Icon> {_.size(post.likes)} </h6></li>
              <li> <a href = './' ><h6 className="card-clip"> <Icon>local_offer</Icon> {post.postcategory} </h6></a></li>
              <li><h6 className="card-clip"> <Icon>share</Icon>  &share</h6></li>
           </ul>
         
          
        </div>
    </div>
)

}




export default Postpage ;










          
        
