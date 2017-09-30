import React, { Component } from 'react';

const Menu = (props)=>{
    return (
        <ul className= {props.classm}>
            <li><a href="/1">one</a></li>
            <li><a href="/2">two</a></li>
            <li><a href="/3">three</a></li>
            <li><a href="/4">four</a></li>
            <li><a href="/5">five</a></li>
        </ul>)
}

export default Menu;