import React from "react";
import "./foot.css";
import logo from "./../../assets/logo_digital_store_negativo.png";
import { Link } from "react-router-dom";

export default function Foot(){

    return(
        <div>
            <footer>
                <div className="column">
                    <img src={logo} alt="Digital Store" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <Link to="#!"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="#!"><i className="fab fa-instagram"></i></Link>
                    <Link to="#!"><i className="fab fa-twitter"></i></Link>
                </div>
                <div className="column">
                    <h6>Informação</h6>
                    <ul>
                        <li>
                            <Link to="#!" className="smoth">Sobre Drip Store</Link>
                        </li>
                        <li>
                            <Link to="#!" className="smoth">Segurança</Link>
                        </li>
                        <li>
                            <Link to="#!" className="smoth">Wishlist</Link>
                        </li>
                        <li>
                            <Link to="#!" className="smoth">Blog</Link>
                        </li>
                        <li>
                            <Link to="#!" className="smoth">Trabalhe conosco</Link>
                        </li>
                        <li>
                            <Link to="#!" className="smoth">Meus Pedidos</Link>
                        </li>
                    </ul>
                </div>
                <div className="column">
                    <h6>Categorias</h6>
                    <ul>
                        <li>
                            <Link to="#!" className="smoth">Camisetas</Link>
                        </li>
                        <li>
                            <Link to="#!" className="smoth">Calças</Link>
                        </li>
                        <li>
                            <Link to="#!" className="smoth">Bonés</Link>
                        </li>
                        <li>
                            <Link to="#!" className="smoth">Headphones</Link>
                        </li>
                        <li>
                            <Link to="#!" className="smoth">Tênis</Link>
                        </li>
                    </ul>
                </div>
                <div className="column">
                    <h6>Contato</h6>
                    <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    <br />
                    <p>(85) 3051-3411</p>
                </div>
                <div className="divider"></div>
                <div className="sub">&copy; Digital College</div>
            </footer>
        </div>
    );
}