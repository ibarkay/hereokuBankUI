import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// -----------------------------------
import Header from "../src/pages/Header";
import Home from "../src/pages/Home";
import Info from "../src/pages/Info";
import Actions from "../src/pages/Actions";

export default class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Header />
					<Route path="/" exact component={Home} />
					<Route path="/info" component={Info} />
					<Route path="/actions" component={Actions} />
				</BrowserRouter>
			</div>
		);
	}
}
