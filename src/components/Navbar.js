import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
 				<ul className="nav-list">
 					<div className="logo">
						<a href="#about"><img src={require('../kings_logo.png')} alt="Kings Secondary Logo"/></a>
					</div>
 					<li><a href="#bigs">BIGS</a></li>
 					<li><a href="#wings">WINGS</a></li>
 					<li><a href="#guards">GUARDS</a></li>
 					<li><a href='#kings'>KINGS</a></li>
 				</ul>
 			</nav>
      );
};
export default Navbar