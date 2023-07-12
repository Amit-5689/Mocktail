import React from 'react';

class NameCocktail extends React.Component {
    
    
    render() {
        const name="daiquiri"
        const apikey="wxSqjtu9PAwmK4TCxK2jpQ==RQ6cjYQNsxlXsK6b"
        const apiurl="https://api.api-ninjas.com/v1/cocktail?name="+name
        const options={
            mehtod:"GET",
            headers:{
                "X-Api-Key":apikey
            }
        }

        async function showdata() {
            const response=await fetch(apiurl,options)
            const data=await response.json()
            console.log(data)
        }
        return (
        <div>
            <div className="card" style={{width:"18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn btn-secondary" onClick={showdata}>Detail</button>
                </div>
            </div>
        </div>);
    }
}

export default NameCocktail;