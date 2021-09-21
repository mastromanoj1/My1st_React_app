import React from 'react';

class Quicklink extends React.Component {
    render() { 
        return (
        <div className ="card-holder">
        <h1 className = "holder-title"> Quick Link  </h1>

        
        <div class="collection">
            <a href="#!" class="collection-item">Category</a>
            <a href="#!" class="collection-item ">About</a>
            <a href="#!" class="collection-item">Contact</a>
            <a href="#!" class="collection-item">New </a>
        </div>
        </div>
        )
    }
}
 
export default Quicklink;