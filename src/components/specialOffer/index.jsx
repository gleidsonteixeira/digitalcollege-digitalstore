import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import tenis4 from "./../../assets/tenis4.png";

export default function SpecialOffer(){
    return(
        <>
            <div className="special-offer">
                <div className="item">
                    <img src={tenis4} alt="Ofertas especiais" />
                </div>
                <div className="item">
                    <h6>Oferta especial</h6>
                    <h2>Air Jordan edição de colecionador</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    <Link to="/">Ver Oferta</Link>
                </div>
            </div>

        </>
    );
}