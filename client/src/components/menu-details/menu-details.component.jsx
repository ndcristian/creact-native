import React from 'react';
import { Button } from 'react-bootstrap';
import './menu-details.styles.scss';


const itemDetails = [
    {
        id: 1,
        name: "Suc de mere",
        details: "suc natural de mere",
        price: 12.2
    },
    {
        id: 2,
        name: "Suc natural de mere",
        details: "suc natural de mere",
        price: 12.2
    },
    {
        id: 3,
        name: "Suc natural / acidulat portocale si gref",
        details: "suc natural de mere",
        price: 12.2
    },
    {
        id: 4,
        name: "Suc de mere",
        details: "suc natural de mere",
        price: 12.2
    }
];
console.log();
class MenuDetails extends React.Component {
    render() {
        return (
            <div className="itemsWraper">
                {
                    itemDetails.map(({ id, name, details, price }) => {
                        return (
                            <div key={id} className="itemDetailsRowWraper">
                                <div  className="itemDetailsRow">
                                    <div className="itemName items">{name}</div>
                                    <div className="itemPrice items">{price}</div>
                                    <div className="itemQty items">
                                        <Button className="plusButton">-</Button>
                                        <input className="qtyInput"></input>
                                        <Button className="plusButton">+</Button>
                                        <Button className="validateButton">Add</Button>
                                        {/* <Logo className="logo"/> */}
                                    </div>
                                </div>
                                <div className="itemInfo">{details}</div>
                            </div>
                        )

                    })
                }
            </div>

        );
    }
}

export default MenuDetails;