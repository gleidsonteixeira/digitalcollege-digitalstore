import React from "react";
import { Link } from "react-router-dom";
import icon_user from "./../../assets/icon_user.png";
import icon_cart from "./../../assets/icon_cart.png";

export default function Logged() {

    const [client, setClient] = React.useState();

    const Logado = (props) => {
        return(
            <>
                <img src={icon_cart} className="cart spaced" alt="Cart"/>
                <img src={icon_user} className="user" alt="User"/>
                <h6 onClick={deslogar}>Olá, {props.client}</h6>
            </>
        );
    }
    
    const Deslogado = () => {
        return(
            <>
                <Link to="signup">Cadastre-se</Link>
                <div className="search-icon"></div>
                <button onClick={logar} className="fill">Entrar</button>
                <img src={icon_cart} className="cart" alt="Cart"/>
            </>
        );
    }

    function logar(){
        let client = {
            nome: "Gleidson Teixeira"
        }
        setClient(client);
        localStorage.setItem("client", JSON.stringify(client));
    }

    function deslogar(){
        setClient("");
        localStorage.removeItem("client");
    }

    React.useEffect(() =>{
        let clientDB = localStorage.getItem("client");
        if(clientDB){
            setClient(JSON.parse(clientDB));
        }
    }, []);

    return (
        <>
            <div className="user-info">
                {
                    client ? <Logado client={client.nome} /> : <Deslogado /> 
                }
            </div>
        </>
    );
}