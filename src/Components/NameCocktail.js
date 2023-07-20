import React from 'react';
import {Link} from 'react-router-dom';

class NameCocktail extends React.Component {
    
    render() {
        let {title, desc}=this.props

        return (
        <div>
            <div className="card my-2 mx-5" style={{width:"16rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{title.charAt(0).toUpperCase() + title.slice(1)}</h5>
                    <h6 className="card-subtitile">Instructions</h6>
                    <p className="card-text">{desc.slice(0,85)+"..."}</p>
                    <Link to="/named"><button type="button" className="btn btn-info">About Cocktail</button></Link>
                </div>
            </div>
        </div>);
    }
}

export default NameCocktail;