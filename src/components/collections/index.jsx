import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import collection1 from "./../../assets/collection1.png";
import collection2 from "./../../assets/collection2.png";
import collection3 from "./../../assets/collection3.png";
import collection_icon1 from "./../../assets/icon_collection1.svg";
import collection_icon2 from "./../../assets/icon_collection2.svg";
import collection_icon3 from "./../../assets/icon_collection3.svg";
import collection_icon4 from "./../../assets/icon_collection4.svg";

export default function Collections(){
    return(
        <>
            <section id="collections">
                <h5>Coleções em destaque</h5>
                <ul className="destaques">
                    <li>
                        <div className="content">
                            <span>30% off</span>
                            <h4>Novo drop Supreme</h4>
                            <Link to="/">Comprar</Link>
                        </div>
                        <img src={collection1} alt="Novo drop Supreme" />
                    </li>
                    <li>
                        <div className="content">
                            <span>30% off</span>
                            <h4>Coleção Adidas</h4>
                            <Link to="/">Comprar</Link>
                        </div>
                        <img src={collection2} alt="Coleção Adidas" />
                    </li>
                    <li>
                        <div className="content">
                            <span>30% off</span>
                            <h4>Novo Beats Bass</h4>
                            <Link to="/">Comprar</Link>
                        </div>
                        <img src={collection3} alt="Novo Beats Bass" />
                    </li>
                </ul>
                <h5 className="center">Coleções em destaque</h5>
                <ul className="icons">
                    <li>
                        <div className="icon active">
                            <img src={collection_icon1} alt="Camisetas" />
                        </div>
                        <h6>Camisetas</h6>
                    </li>
                    <li>
                        <div className="icon">
                            <img src={collection_icon2} alt="Calças" />
                        </div>
                        <h6>Calças</h6>
                    </li>
                    <li>
                        <div className="icon">
                            <img src={collection_icon2} alt="Bónes" />
                        </div>
                        <h6>Bónes</h6>
                    </li>
                    <li>
                        <div className="icon">
                            <img src={collection_icon3} alt="Headphones" />
                        </div>
                        <h6>Headphones</h6>
                    </li>
                    <li>
                        <div className="icon">
                            <img src={collection_icon4} alt="Tênis" />
                        </div>
                        <h6>Tênis</h6>
                    </li>
                </ul>
            </section>
        </>
    );
}

