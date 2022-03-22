import React from 'react';
import './Header.css';

const Header = () => {
    return(
    <div className='headerContainer'>
        <h2>Pomofocus</h2>
        <div className='btnContainer'>
            <button className='headerBtn'>Report</button>
            <button className='headerBtn'>Setting</button>
            <button className='headerBtn'>Login</button>
        </div>
    </div>
    )
}

export default Header;