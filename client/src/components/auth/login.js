import React, { Fragment, useState,useContext,useEffect } from 'react';
import axios from "axios";
import { BookContext } from '../contexts/authcontext';
import  { useHistory } from 'react-router-dom';
import {Gisauth} from '../contexts/gisauth'

const Login = ({ setAlert, register, isAuthenticated }) => {

        const [isauth,setIsauth] = useContext(Gisauth);
        const [formData, setFormData] = useState({
            email: '',
            password: '',
          });
        const { email, password} = formData; 

        const {books,newtoken} = useContext(BookContext)  
        const history = useHistory(); 


          

        const onSubmit = async (e) => {
            e.preventDefault();

            if (formData)
             {
                const newuser = 
                {
                    email,
                    password
                }  
                try{ 

                    const response = await axios 
                    ({
                        url: "http://localhost:4000/api/auth",
                        method: 'post',
                        data: newuser
                    })
                    console.log(response.data.token)
                    newtoken(response.data.token,true)
                    // history.push("/")  

                }catch(err){
                    console.log(err);
                }
            } else 
            {
               console.log("Server Eroe")
            }
        };
          
        const Logout = async (e) => {
            e.preventDefault();

            newtoken("not valid",false);
            
        }
            

          const onChange = (e) => 

          setFormData({ ...formData, [e.target.name]: e.target.value });

          if(!isauth){
            return (
            <BookContext.Consumer>{() => {
            return(
               
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


                            <p>{books.authtoken}</p>

                            <input type="submit" className="btn btn-primary" value="Login"  />
                    
                        </form>
                    
                    </div>  
                    </Fragment>
             )
            }}</BookContext.Consumer>
            );
        }else{

            return (
            <BookContext.Consumer>{() => {
                return(               
                <Fragment>
                    <div className=" white container row ">
                        <form className="col " onSubmit={Logout}>

                            <p>{books.authtoken}</p>
                            <p>Already Logged in    </p>
                            <input type="submit" className="btn btn-primary" value="Logout"  />
            
                        </form>        
                    </div>
                </Fragment>
                )
                }}
            </BookContext.Consumer>
            );
        }
        }
    


 
export default Login;