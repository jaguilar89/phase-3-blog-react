import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="home">Home</NavLink>
                    <NavLink>Navbar link</NavLink>
                    <NavLink>Navbar link</NavLink>
                </li>
            </ul>
        </nav>
    )
}