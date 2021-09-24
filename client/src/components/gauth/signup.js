import React,{useContext} from 'react';
import Login from '../gauth/login'
import Logout from '../gauth/logout'
import { Gisauth } from '../contexts/gisauth';


function Signup() {

    const [isauth,setIsauth] = useContext(Gisauth);

    if(isauth)
    return (<Logout/>)
    else
    return(<Login/>)

}

export default Signup;