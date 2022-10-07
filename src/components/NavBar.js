import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled.div`
    color: white;
    background-color: black;
`

function NavBar() {
    return (
        <React.Fragment>
            <NavLink to="/morans-morale/" >
                <Link>
                Home
                </Link>
            </NavLink>
            <NavLink to="/morans-morale/discovery" >
                <Link>
                Discovery
                </Link>
            </NavLink>
        </React.Fragment>
    )
}

export default NavBar;
