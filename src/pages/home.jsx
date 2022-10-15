import "./pages.css";
import React from "react";
import Head from "../components/head";
import Foot from "../components/foot";
import Collections from "../components/collections";
import ProductsHigh from "../components/product";
import SpecialOffer from "../components/specialOffer";
import Carrossel from "../components/carrossel";

export default function Home(){
    
    return(
        <>
            <Head />
            <main>
                <Carrossel />
                <Collections />
                <ProductsHigh />
                <SpecialOffer />
            </main>
            <Foot />
        </>
    );
    
}