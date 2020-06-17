import React from "react";

import { Jumbotron } from 'react-bootstrap';
import "./promo.styles.scss"
const promoData = [
    {
        id: 1,
        nume: " Promo 1"
    },
    {
        id: 2,
        nume: " Promo 3"
    }
    // {
    //     id: 3,
    //     nume: " Promo 3"
    // }
];

const Promo = () => {
    console.log(promoData);
    return (
        <div >
            {promoData.map(({ nume, id }) => (
                <Jumbotron className="promoItem" key={id} >
                    {nume}
                </Jumbotron>
            ))}
        </div>
    )
}

export default Promo;