import React from 'react';

import logo from '../../assets/burger_122704.ico';
import './menu-categories.styles.scss';

const MenuCategory = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-categories`}>
    {/* <div className='icon' >
      <img src={logo} alt="Logo" />
    </div> */}
    <img src={logo} alt="Logo" />
    <div className='title' >{title.toUpperCase()}</div>
  </div>
);

export default MenuCategory;
