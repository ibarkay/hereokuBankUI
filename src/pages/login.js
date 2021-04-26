import axios from "axios";
import React, { useState } from "react";
import Cookies from "universal-cookie";

const Login = () => {
	const cookies = new Cookies();

	const [statusMsg, setStatusMsg] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const uri = "http://localhost:3007";

	const handleClick = async () => {
		axios
			.post(uri + "/bankReact/users/login", {
				email: email,
				password: password,
			})
			.then((resp) => {
				console.log(resp);
				cookies.set("token", resp.data.token, { path: "/" });
				console.log(cookies.get("token")); // Pacman
			});
		setStatusMsg("Logged in!");
	};

	return (
		<div>
			<div className="email">
				<label htmlFor="email">email</label>
				<br />
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					name="email"
					id=""
				/>
			</div>
			<div className="password">
				<label htmlFor="password">password</label>
				<br />
				<input
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					name="password"
					id=""
				/>
			</div>
			<button onClick={() => handleClick()}>Login</button>
			<h1>{statusMsg}</h1>
		</div>
	);
};

export default Login;
