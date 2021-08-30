import React, { Fragment, useState } from 'react';
import axios from "axios";

const Register = ({ setAlert, register, isAuthenticated }) => {
        
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            password: '',
            password2: ''
          });


        const { name, email, password, password2 } = formData;


        
        const onSubmit = async (e) => {
            e.preventDefault();
            if (password !== password2) {
                console.log("Password do not Match ")
            } else {
                const newuser = {
                    name,
                    email,
                    password
                }    


                try{

                    const response = await axios ({
                        url: "http://localhost:4000/api/user",
                        method: 'post',
                        data: newuser
                    })


                    console.log(response.data);


                }catch(err){
                    console.log(err.response.data);
                }
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
                        id="first_name" 
                        type="text" 
                        name = "name"
                        value = {name}
                        onChange={onChange}
                        className="validate"/>
                        <label for="first_name">First Name</label>
                    </div>
                </div>
                
    
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
    
                <div className="row">
                    <div className="input-field col s12 l4">
                        <input id="password2" 
                        name = "password2" 
                        type="password"
                        value = {password2}
                        onChange={onChange}  
                        className="validate"/>
                        <label for="password">Password</label>
                    </div>
                </div>

                <input type="submit" className="btn btn-primary" value="Register" />
        
        </form>
        
      </div>


             </Fragment>
            );
        }
    

    export default Register;