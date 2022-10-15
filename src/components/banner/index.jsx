import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import tenis3 from "./../../assets/tenis3.png";

export default function Banner(props){
    
    return(
        <>
            <section className="banner">
                <div className="content">
                    <h6>Melhores ofertas personalizadas</h6>
                    <h2>Queima de<br/>stoque Nike🔥</h2>
                    <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                    <Link to="/promo">Ver Ofertas {props.position}</Link>
                </div>
                <div className="image">
                    <img src={tenis3} alt="Tenis" />
                </div>
            </section>
        </>
    );
}