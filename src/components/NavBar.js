import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}