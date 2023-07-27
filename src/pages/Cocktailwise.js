import React from 'react';
import { useSelector } from 'react-redux';

const Cocktailwise = () => {
    const name=useSelector(state=>state.showPage)
    console.log(name)
    return (
    <div>
        Welcome
    </div>);
}

export default Cocktailwise;