import React from 'react';
import {Link} from 'react-router';
const links = [1,2,3,4,5,6,7,8,9,10];
const App = (props) => (
    <div>
        This is page {props.params.id !== undefined ?
        `${props.params.id}` : 'IndexPage'}
        {links.map((item)=>{
            if (item !== props.params.id)
                return(
                    <div key = {item}>
                        <Link to = {`/page-${item}`}>
                            Redirect to {`page-${item}`}
                        </Link>
                        <br/>
                    </div>)
        })}
    </div>
)
export default App;

