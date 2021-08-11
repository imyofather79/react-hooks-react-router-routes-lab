import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  }

  return (
  <div>
    <NavLink 
    to="/"
    exact
    style={linkStyles}
    activeStyle={{
      background: "darkblue",
    }}
    >
      Home
    </NavLink> 
    <NavLink 
    to="/movies"
    exact
    style={linkStyles}
    activeStyle={{
      background: "darkblue",
    }}
    >
      Movies
    </NavLink>
    <NavLink 
    to="/actors"
    exact
    style={linkStyles}
    activeStyle={{
      background: "darkblue",
    }}
    >
      Actors
    </NavLink>
    <NavLink 
    to="/directors"
    exact
    style={linkStyles}
    activeStyle={{
      background: "darkblue",
    }}
    >
      Directors
    </NavLink>
  </div>
  );
}

export default NavBar;
