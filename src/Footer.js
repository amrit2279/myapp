import React from "react";
import "./Footer.css";
import minion from "./minion.png"
import deal from "./deal.png"
import welcome from "./welcome.png"
function Footer() {
    return (
        <ul className="bg-dark main">
            <li>
                <div>
                <p className="footer_text">Welcome to our new website</p>
                <img src={welcome} alt="" height="180" />
                <p className="footer_text">LEARN ABOUT VIRGINAMERICA.COM</p>
                </div>
            </li>
            <li>
                <div>
                <p className="footer_text">Deals from $49 to your favourite cities</p>
                <img src={deal} alt=""  height="180" />
                <p className="footer_text">SEE ALL DEALS</p>
                </div>
            </li>
            <li>
                <div>
                <p className="footer_text">Refer and Earn rewards</p>
                <img src={minion} alt="" height="180" />
                <p className="footer_text">WHATS NEW FOR YOU</p>
                </div>
            </li>
        </ul>
        
    );
}

export default Footer;