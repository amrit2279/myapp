import React from "react";
import "./Nav.css";
function Nav() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg  navbar-dark bg-custom-2">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">America</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">BOOK</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">CHECKIN</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">MANAGE</a>
                            </li>
                            </ul>
                            <ul class = "navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Deals</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Flying with us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Where we fly</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">FAQ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Fees</a>
                            </li>
                        </ul>
                        
                    </div>
                    <ul class="navbar-nav ">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Elevate</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">SignIn</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">SignOut</a>
                            </li>
                        </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;