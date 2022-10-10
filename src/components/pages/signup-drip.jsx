import React from "react";
import { Link } from "react-router-dom";
import Foot from "../foot";
import "./pages.css";
import logo from "./../../assets/logo_digital_store.png";

export default function Signup(){
    
    return(
        <div>
            <div id="header">
                <Link to="/"><img src={logo} alt="Digital Store"/></Link>
            </div>
            <main>
                <section id="account-drip">
                    <form>
                        <h3>Crie sua conta</h3>
                        <div className="box">
                            <label>Informações Pessoais</label>
                            <div className="divider"></div>
                            <label>Nome Completo *</label>
                            <input type="text" name="nome" placeholder="Insira seu nome" required/>
                            <label>CPF *</label>
                            <input type="text" name="cpf" placeholder="Insira seu CPF" required/>
                            <label>Email *</label>
                            <input type="text" name="email" placeholder="Insira seu email" required/>
                            <label>Celular *</label>
                            <input type="text" name="celular" placeholder="Insira seu celular" required/>
                        </div>
                        <div className="box">
                            <label>Informações de Entrega</label>
                            <div className="divider"></div>
                            <label>Endereço *</label>
                            <input type="text" name="endereço" placeholder="Insira seu endereço" required/>
                            <label>Bairro *</label>
                            <input type="text" name="bairro" placeholder="Insira seu bairro" required/>
                            <label>Cidade *</label>
                            <input type="text" name="cidade" placeholder="Insira sua cidade" required/>
                            <label>CEP *</label>
                            <input type="text" name="cep" placeholder="Insira seu CEP" required/>
                            <label>Complemento</label>
                            <input type="text" name="complemento" placeholder="Insira complemento" required/>
                        </div>
                        <div className="terms">
                            <input type="checkbox" name="termos" />
                            <p>Quero receber por email ofertas e novidades das lojas da Digital Store, A frequência de envios pode variar de acordo com a interação do cliente.</p>
                        </div>
                        <button type="submit" className="smoth click">Criar Conta</button>
                    </form>
                </section>
            </main>
            <Foot />
        </div>
    );
    
}