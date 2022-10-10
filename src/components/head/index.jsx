import React from "react";
import { Link } from "react-router-dom";
import "./head.css";
import logo from "./../../assets/logo_digital_store.png";
import icon_user from "./../../assets/icon_user.png";
import icon_cart from "./../../assets/icon_cart.png";

export default function Head() {

    return (
        <header>
            <Link to="/"><img src={logo} alt="Digital Store"/></Link>
            <div className="search">
                <form>
                    <input type="text" name="search" placeholder="O que está procurando?" />
                    <button className="smoth click"></button>
                </form>
            </div>
            <div className="user-info">
                <img src={icon_cart} alt="Cart"/>
                <img src={icon_user} alt="User"/>
                <h6>Olá, Gleidson Teixeira</h6>
            </div>
            <ul>
                <li>
                    <Link to="#!" className="smoth">Home</Link>
                </li>
                <li>
                    <Link to="#!" className="smoth">Produtos</Link>
                </li>
                <li>
                    <Link to="#!" className="smoth">Categorias</Link>
                </li>
                <li>
                    <Link to="#!" className="smoth active">Meus Pedidos</Link>
                </li>
            </ul>
        </header>
    );
}