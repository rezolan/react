import React, { Component } from 'react';
import Menu from './Menu';

class Header extends Component{
    render(){
        return(
            <div  className = "foot">
                <Menu classm = 'menu'/>
            </div>
        )
    }
}
export default Header;