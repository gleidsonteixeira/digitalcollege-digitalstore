import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./style.css";
import logo from "./../../assets/logo_digital_store.png";
import Logged from "./logged";
import Menu from "./menu";
import Search from "./search";

export default function Head() {

    const [menu, setMenu] = React.useState(false);
    const [search, setSearch] = React.useState(false);

    function toggleMenu(){
        setMenu(!menu);
    }
    
    function toggleSearch(){
        setSearch(!search);
    }

    return (
        <header>
            <div className="menu-btn" onClick={() => { toggleMenu() }}></div>
            <Link to="/"><img src={logo} alt="Digital Store"/></Link>
            <Search active={search} />
            <Logged searchShow={toggleSearch} active={search} />
            <Menu active={menu} />
        </header>
    );
}