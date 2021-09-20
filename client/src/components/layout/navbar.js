import React from 'react';
import { BookContext } from '../contexts/authcontext';


class Navbar extends React.Component{

   static contextType = BookContext

  
    render() { 

      console.log(this.context)
        return (    
            <BookContext.Consumer>{(context) => {
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
                            <li><a href="/profile"> Profile </a></li>
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
            }}
         
            </BookContext.Consumer>
         );
    }
}
 
export default Navbar;