import React from 'react';

class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (    

            <div>
                <nav className = "navbar-fixed">
                    <div className="nav-wrapper #00695c teal darken-3 ">
                        <a  href ="/" className="brand-logo ">Logo</a>
                        <a  href  ="" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right ">
                            <li className = "hide-on-med-and-down"><a href="/login">Login </a></li>
                            <li className = "hide-on-med-and-down"><a href="/register"> Register </a></li>
                            <li className = "hide-on-med-and-down"><a href="collapsible.html"> Contact us</a></li>
                            <li className = "hide-on-med-and-down"><a href="mobile.html">Mobile</a></li>
                            <li><a href="/profile"> Profile </a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="collapsible.html">Contact us</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                </ul>
            </div>
         );
    }
}
 
export default Navbar;