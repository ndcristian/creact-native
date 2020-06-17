import React from 'react';


import { Button } from 'react-bootstrap';
import './menu-categories.styles.scss';
// import MenuDetails from '../menu-details/menu-details.component';
import MenuDetails from '../menu-details/menu_details_big.component'

const categories = [
  {
    id: 1,
    name: "Cooked",
    img: "./assets/fast-food.png"
  },
  {
    id: 2,
    name: "FastFood",
    img: "./assets/drinks.png"
  },
  {
    id: 3,
    name: "Pizza",
    img: "./assets/icecream.png"
  },
  {
    id: 4,
    name: "Others",
    img: "./assets/drinks.png"
  },
  {
    id: 5,
    name: "Others",
    img: "./assets/drinks.png"
  },
  {
    id: 6,
    name: "Others",
    img: "./assets/drinks.png"
  }
];

const MenuCategory = ({ title, imageUrl, size }) => (
  <div className="categories">
    <div className="categoryTitle">
      <div className="categoryIcon" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div>{title}</div>
    </div>

    <div className=" categoryRow">
      {categories.map(({ id, name, img }) => {
        // console.log(id, name, img);
        return (<Button key={id} className="categoryItems">
          {name}
        </Button>
        )
      })}
    </div>
    <MenuDetails></MenuDetails>
  </div>
);

export default MenuCategory;
