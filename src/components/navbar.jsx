import React from "react";

//Stateless Functional Component
const NavBar = props => {
  console.log("NavBar - Rendered");

  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

//cc to create a class component
//sfc to create a stateless funcntional component

export default NavBar;
