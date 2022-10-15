import "./pages.css";
import React from "react";
import Head from "../components/head";
import Foot from "../components/foot";
import Banner from "../components/banner";
import Collections from "../components/collections";
import ProductsHigh from "../components/product";
import SpecialOffer from "../components/specialOffer";

export default function Home(){
    
    return(
        <>
            <Head />
            <main>
                <Banner />
                <Collections />
                <ProductsHigh />
                <SpecialOffer />
            </main>
            <Foot />
        </>
    );
    
}