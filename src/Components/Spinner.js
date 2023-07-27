import React from 'react';
import loading from './laoder.gif'

class Spinner extends React.Component {

    render() {
        return <div>
            <img src={loading} alt="loading" />
        </div>;
    }
}

export default Spinner;