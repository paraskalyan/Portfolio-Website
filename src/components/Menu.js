import React, { useState } from 'react';
import {Link} from 'react-router-dom';
const Menu = ()=>{
    // const d = new Date().getDate();
    const[date, updateDate] = useState(Date());
    setInterval(()=>{
        updateDate(Date());
    }, 1000);
    return(
        <nav>
            <div id='circle'>

            </div>
            <div id='my-title'>
                <div id='name'>PARAS KALYAN</div>
                <p>Developer</p>
            </div>
            <ul>
                <li><Link className="menu-item" to='/'>HOME</Link></li>
                <li><Link className="menu-item" to='/about'>ABOUT</Link></li>
                <li><Link className="menu-item" to='/products'>PRODUCTS</Link> </li>
            </ul>
            <div id='time-date'>
                {date}
            </div>
        </nav>
    )

}
export default Menu;