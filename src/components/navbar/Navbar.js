import React, {useState} from "react";
import Hamburger from "./Hamburger";
import './Navbar.css';

const Navbar = () => {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	}

    return (
        <nav className="navbar">
			<ul className="nav-list">
				<div className="logo">
					<a href="#about"><img src={require('../../kings_logo.png')} alt="Kings Secondary Logo"/></a>
				</div>
				<li><a href="#bigs">BIGS</a></li>
				<li><a href="#wings">WINGS</a></li>
				<li><a href="#guards">GUARDS</a></li>
				<li><a href='#kings'>KINGS</a></li>
			</ul>
			<div className="hamburger" onClick={toggleHamburger}>
				<Hamburger />
			</div>
		</nav>
      );
};
export default Navbar