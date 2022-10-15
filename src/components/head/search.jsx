import React from "react";

export default function Search(props){
    return(
        <>
            <div className={ props.active ? "search active" : "search"}>
                <form>
                    <input type="text" name="search" placeholder="O que está procurando?" />
                    <button className="smoth click"></button>
                </form>
            </div>
        </>
    );
}