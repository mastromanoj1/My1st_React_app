import React, { Fragment, useState } from 'react';
import axios from "axios";

const Login = ({ setAlert, register, isAuthenticated }) => {
        
        const [formData, setFormData] = useState({
            email: '',
            password: '',
          });


        const { email, password} = formData;


        
        const onSubmit = async (e) => {
            e.preventDefault();
            if (formData) {

                const newuser = {
                    email,
                    password
                }    


                try{

                    const response = await axios ({
                        url: "http://localhost:4000/api/auth",
                        method: 'post',
                        data: newuser
                    })


                    console.log(response.data);


                }catch(err){
                    console.log(err.response.data);
                }
            } else {
               console.log("Server Eroe")
            }
        };
          


          const onChange = (e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value });

            return (
               
            <Fragment>
             <div className=" white container row ">
            <form className="col " onSubmit={onSubmit}>
                
              
                
    
                <div className="row">
                    <div className="input-field col s12 l4">
                        <input 
                        id="email" 
                        name = "email" 
                        type="email"
                        value = {email}
                        onChange={onChange} 
                        className="validate"/>
                        <label for="email">Email</label>
                    </div>
                </div>
          
                <div className="row">
                    <div className="input-field col s12 l4">
                        <input id="password" 
                        name ="password" 
                        type="password"
                        value = {password}
                        onChange={onChange}  
                        className="validate"/>
                        <label for="password">Password</label>
                    </div>
                </div>
                <br/>

                <input type="submit" className="btn btn-primary" value="Login" />
        
        </form>
        
      </div>


             </Fragment>
            );
        }
    


 
export default Login;