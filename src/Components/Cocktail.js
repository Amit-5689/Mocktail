import React from 'react';
import NameCocktail from './NameCocktail'

class News extends React.Component {
    render() {
        return (
        <div className='contianer my-2'>
            <h2>Cocktails....</h2>
            <div className="row">
                <div className="col-md-4">
                    <NameCocktail/>
                </div>
                <div className="col-md-4">
                    <NameCocktail/>
                </div>
                <div className="col-md-4">
                    <NameCocktail/>
                </div>
                <div className="col-md-4">
                    <NameCocktail/>
                </div>
            </div>
        </div>);
    }
}

export default News;