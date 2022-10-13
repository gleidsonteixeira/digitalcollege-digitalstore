import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./style.css";
import logo from "./../../assets/logo_digital_store.png";
import Logged from "./logged";
import Menu from "./menu";

export default function Head() {

    const [menu, setMenu] = React.useState(false);

    function toggleMenu(){
        if(menu){
            setMenu(false);
        }else{
            setMenu(true);
        }
    }



    return (
        <header>
            <div className="menu-btn" onClick={() => { toggleMenu() }}></div>
            <Link to="/"><img src={logo} alt="Digital Store"/></Link>
            <div className="search">
                <form>
                    <input type="text" name="search" placeholder="O que está procurando?" />
                    <button className="smoth click"></button>
                </form>
            </div>
            <Logged />
            <Menu active={menu} />
        </header>
    );
}