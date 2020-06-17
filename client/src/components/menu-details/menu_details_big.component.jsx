import React from 'react';


import { Button } from 'react-bootstrap';
import './menu_details_big.styles.scss';


const itemDetails = [
    {
        id: 1,
        name: "Suc de mere",
        details: "suc natural de mere",
        price: 12.2,
        imgUrl: './assets/meniu-gratar-51.jpg'
    },
    {
        id: 2,
        name: "Suc natural de mere",
        details: "suc natural de mere",
        price: 12.2,
        imgUrl: './assets/meniu-cascaval-41.jpg'
    },
    {
        id: 3,
        name: "Suc natural / acidulat portocale si gref",
        details: "suc natural de mere",
        price: 12.2,
        imgUrl: './assets/meniu-gratar-51.jpg'
    },
    {
        id: 4,
        name: "Suc de mere",
        details: "suc natural de mere",
        price: 12.2,
        imgUrl: './assets/meniu-mixt-cascaval-50.jpg'
    }
];
console.log();
class MenuDetailsBig extends React.Component {
    render() {
        return (
            <div className="productsWraper">
                {
                    itemDetails.map(({ id, name, details, price, imgUrl }) => {
                        return (
                            <div key={id} className="productDetailsWraper">
                                <div  className="itemBig item" style={{ backgroundImage: `url(${imgUrl})` }}></div>
                                <div className="productCommandBar">
                                    <div className=" btn plusButton">-</div>
                                   <div className="qtyInput"><input ></input></div> 
                                    <div className="btn plusButton">+</div>
                                    
                                </div>
                                <Button className="validateButton">Add</Button>
                            </div>

                        )

                    })
                }
            </div>

        );
    }
}

export default MenuDetailsBig;