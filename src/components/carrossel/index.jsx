import React from "react";
import Banner from "../banner";

import "./style.css";

export default function Carrossel(){

    const [position, setPosition] = React.useState(0);

    return(
        <>
            <div className="carrossel">
                <ul>
                    <li className={ position == 0 ? "active" : "" }>
                        <Banner position="1" />
                    </li>
                    <li className={ position == 1 ? "active" : "" }>
                        <Banner position="2" />
                    </li>
                    <li className={ position == 2 ? "active" : "" }>
                        <Banner position="3" />
                    </li>
                </ul>
                <div className="carrossel-pills">
                    <div className={ position == 0 ? "carrossel-pill active" : "carrossel-pill" } onClick={() => { setPosition(0) }}></div>
                    <div className={ position == 1 ? "carrossel-pill active" : "carrossel-pill" } onClick={() => { setPosition(1) }}></div>
                    <div className={ position == 2 ? "carrossel-pill active" : "carrossel-pill" } onClick={() => { setPosition(2) }}></div>
                </div>
            </div>
        </>
    );
}