import React from 'react';
import './menu.style.scss';


const Menu = ()=>{
    return(
        <div className='menu'>
<ul>
    <li><a href='#home'>خانه</a></li>
     <li><a href='#shop'>فروشگاه</a></li>
     <li><a href='#Gallery'>گالری</a></li>
      <li><a href='#About'>درباره ما</a></li>
        <li><a href='#contact'>تماس با ما</a></li>
</ul>
        </div>
    );
}
export {Menu};