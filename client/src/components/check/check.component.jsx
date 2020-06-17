import React from 'react';
import {  Button } from 'react-bootstrap';
import './check.styles.scss';
// import { ReactComponent as Logo } from '../../assets/validate.svg';

const checkDetails = [
    {
        id: 1,
        name: "Suc de mere",
        qty: 4,
        price: 12.2,
        value: 40
    },
    {
        id: 2,
        name: "Suc natural de mere",
        qty: 4,
        price: 12.2,
        value: 40
    },
    {
        id: 3,
        qty: 4,
        details: "suc natural de mere",
        price: 12.2,
        value: 40
    },
    {
        id: 4,
        name: "Suc de mere",
        qty: 4,
        price: 12.2,
        value: 40
    }
];
console.log();
class Check extends React.Component {
    render() {
        return (
            <div className="itemsWraper">
                <Button className="checkButton">Checck details</Button>
                {
                    checkDetails.map(({ id, name, qty, price, value }) => {
                        return (
                            <div key={id} className="checkItemDetailsRowWraper">
                                <div className="checkItemDetailsRow">
                                    <div className="checkItemName items">{name}</div>
                                    <div className="checkItemQty items">{qty}</div>
                                    <div className="checkItemPrice items">{price}</div>
                                    <div className="checkItemPrice items">{value}</div>
                                </div>
                                
                            </div>
                        )
                    })
                }
                <div className="checkSubtotal items">Subtotal</div>
                <div className=" checkSubtotal checkTotal items">Total</div>
            </div>

        );
    }
}

export default Check;