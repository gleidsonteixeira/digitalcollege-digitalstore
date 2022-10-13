import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Menu(props){

    let location = useLocation();

    function activeMenu(path){
        return location.pathname === path ? "smoth active" : "smoth";
    }

    return(
        <>
            <ul className={props.active ? "active" : ""}>
                <li>
                    <Link to="/" className={activeMenu("/")}>Home</Link>
                </li>
                <li>
                    <Link to="/products" className={activeMenu("/products")}>Produtos</Link>
                </li>
                <li>
                    <Link to="/categories" className={activeMenu("/categories")}>Categorias</Link>
                </li>
                <li>
                    <Link to="/orders" className={activeMenu("/orders")}>Meus Pedidos</Link>
                </li>
            </ul>
        </>
    );
}