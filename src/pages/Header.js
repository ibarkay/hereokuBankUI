import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div style={{ display: "flex", justifyContent: "space-around" }}>
			<Link to="/">Home Page</Link>
			<Link to="/info/">Information</Link>
			<Link to="/actions/">Actions</Link>
		</div>
	);
};

export default Header;
