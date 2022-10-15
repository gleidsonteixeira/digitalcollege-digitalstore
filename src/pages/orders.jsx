import React from "react";
import Head from "./../components/head";
import Foot from "./../components/foot";
import "./pages.css";

export default function Orders(){
    
    return(
        <>
            <Head />
            <main>
                <section id="orders">
                    Pedidos
                </section>
            </main>
            <Foot />
        </>
    );
    
}