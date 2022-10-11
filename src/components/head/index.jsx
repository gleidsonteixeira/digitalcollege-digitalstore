import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./head.css";
import logo from "./../../assets/logo_digital_store.png";
import icon_user from "./../../assets/icon_user.png";
import icon_cart from "./../../assets/icon_cart.png";

export default function Head() {

    let location = useLocation();
    function active(path){
        return location.pathname === path ? "smoth active" : "smoth";
    }

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
                    <Link to="/" className={active("/")}>Home</Link>
                </li>
                <li>
                    <Link to="/products" className={active("/produtos")}>Produtos</Link>
                </li>
                <li>
                    <Link to="/categories" className={active("/categorias")}>Categorias</Link>
                </li>
                <li>
                    <Link to="/orders" className={active("/orders")}>Meus Pedidos</Link>
                </li>
            </ul>
        </header>
    );
}