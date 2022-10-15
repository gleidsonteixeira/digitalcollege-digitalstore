import React from "react";
import { Link } from "react-router-dom";
import Foot from "./../components/foot";
import "./pages.css";
import logo from "./../assets/logo_digital_store.png";
import tenis1 from "./../assets/tenis1.png";
import tenis2 from "./../assets/tenis2.png";
import icon_google from "./../assets/icon_google.png";
import icon_facebook from "./../assets/icon_facebook.png";

export default function Login(){
    
    return(
        <div>
            <div id="header">
                <Link to="/"><img src={logo} alt="Digital Store"/></Link>
            </div>
            <main>
                <section id="account">
                    <form>
                        <h3>Acesse sua conta</h3>
                        <p>Novo cliente? Então registre-se <Link to="/signup" className="smoth">aqui</Link></p>
                        <label>Login *</label>
                        <input type="text" name="email" placeholder="Insira seu login ou email" required/>
                        <label>Senha *</label>
                        <input type="password" name="password" placeholder="Insira sua senha" required/>
                        <Link to="/remenber-password" className="smoth">Esqueci minha senha</Link>
                        <button type="submit" className="smoth click">Acessar Conta</button>
                        <div className="social-login">
                            <p>Ou faça login com </p>
                            <img src={icon_google} alt="Google"/>
                            <img src={icon_facebook} alt="Facebook"/>
                        </div>
                    </form>
                    <img src={tenis1} alt="Tenis" className="tenis1" />
                    <img src={tenis2} alt="Tenis" className="tenis2" />
                </section>
            </main>
            <Foot />
        </div>
    );
    
}