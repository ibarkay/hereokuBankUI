import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// -----------------------------------
import Header from "../src/pages/Header";
import Home from "../src/pages/Home";
import Info from "../src/pages/Info";
import Actions from "../src/pages/Actions";
import Login from "../src/pages/login";
import Logout from "../src/pages/logout";

export default class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Header />
					<Route path="/" exact component={Home} />
					<Route path="/info" component={Info} />
					<Route path="/login" component={Login} />
					<Route path="/logout" component={Logout} />
					<Route path="/actions" component={Actions} />
				</BrowserRouter>
			</div>
		);
	}
}
