import React, { Component } from 'react';
import Article from './Article';

class Contant extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="contant">
                {this.props.data.map(function(item,key){
                    return <Article propItem = {item} key = {key}></Article>
                })}

            </div>
        )
    }
}
export default Contant;