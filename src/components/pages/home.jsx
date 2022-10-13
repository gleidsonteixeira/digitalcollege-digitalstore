import "./pages.css";
import React from "react";
import Head from "../head";
import Foot from "../foot";
import Banner from "../banner";
import Collections from "../collections";

export default function Home(){
    
    return(
        <>
            <Head />
            <main>
                {/* <Banner />
                <Collections /> */}
            </main>
            <Foot />
        </>
    );
    
}