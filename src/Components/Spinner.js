import React from 'react';
import loading from './loader.png'

class Spinner extends React.Component {

    render() {
        return <div className='App-logo'>
            <img src={loading} alt="loading" />
        </div>;
    }
}

export default Spinner;