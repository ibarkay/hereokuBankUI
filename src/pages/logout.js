import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const Logout = () => {
	const [status, setStatus] = useState("");

	const uri = "http://localhost:3007";
	const cookies = new Cookies();

	const handleLogout = async () => {
		try {
			const token = await cookies.get("token");
			const respond = await axios.post(
				uri + "/bankReact/users/logoutAll",
				{},
				{
					headers: { Authorization: token },
				}
			);
			setStatus("logged off!");
		} catch (e) {
			setStatus("you are not logged in");
		}
	};

	return (
		<div>
			<button onClick={() => handleLogout()}>Logout</button>
			<h1>{status}</h1>
		</div>
	);
};

export default Logout;
