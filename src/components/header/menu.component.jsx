import React from 'react';
import './header.style.scss';
import { FaShoppingBag } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Menu = ()=>{
    return(
        <div className='menu'>
<ul>
    <li><NavLink to="/">خانه</NavLink></li>
     <li><NavLink to="/shop">فروشگاه</NavLink></li>
      <li><NavLink to="/gallery">گالری</NavLink></li>
        <li><NavLink to="/about">درباره ما</NavLink></li>
                <li><NavLink to="/contact">تماس با ما</NavLink></li>

        <FaShoppingBag className='basketIcon'/>
        </ul>
        </div>
    );
}
export {Menu};