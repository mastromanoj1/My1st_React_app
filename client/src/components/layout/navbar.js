import React ,{useContext} from 'react';
import {Gisauth} from '../contexts/gisauth'




const Navbar = () => {

    const [isauth,setIsauth] = useContext(Gisauth);
    let button ;

    if(isauth){
        button = "true"
    }else{
        button = ""
    }

    return(
        <div>
                <nav className = "navbar-fixed">
                    <div className="nav-wrapper #00695c teal darken-3 ">
                        <a  href ="/" className="brand-logo ">Logo</a>
                        <a  href  ="" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right ">
                            <li className = "hide-on-med-and-down"><a href="/login">Login </a></li>
                            <li className = "hide-on-med-and-down"><a href="/register"> Register </a></li>
                            <li className = "hide-on-med-and-down"><a href="/contact"> Contact us</a></li>
                            <li className = "hide-on-med-and-down"><a href="/about">About </a></li>
                            <li><a href="/profile"> {button} </a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/contact">Contact us</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
                
                
            </div>
    )


}

 
 
    
   
 
 
export default Navbar;