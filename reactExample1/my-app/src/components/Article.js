import React, { Component } from 'react';

class Article extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props);
        return (
            <article className="item">
                <img src={this.props.propItem.img} alt={this.props.propItem.alt}/>
                <div>
                    <h2>{this.props.propItem.title}</h2>
                    <p>{this.props.propItem.cont}</p>
                </div>

            </article>
        )
    }
}
export default Article;