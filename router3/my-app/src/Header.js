import React, { Component, PropTypes } from 'react';
class Header extends Component{
    static propTypes = {
        items: PropTypes.array.isRequired,
        type: PropTypes.oneOf(['news', 'photos']),
        user: PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number
        }),
        users: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                age: PropTypes.number
            })
        )

    }
    render(){
        return(
            <div>
                {this.props.items.map((item,index) => {
                    console.log('items', item.label);
                    return <a href={item.link} key={index}>{item.label}</a>
                })}
            </div>
        )
    }
}
export default Header;





