import axios from "axios";
import React, { useState } from "react";
import "../css/App.css";
// --------------------------------------

const uri = "https://bapibank.herokuapp.com";

const Info = () => {
	const [users, setUsers] = useState([]);
	const [accounts, setAccounts] = useState([]);
	const [transactions, setTransactions] = useState([]);
	const [userInput, setUserInput] = useState("");
	const [accountInput, setAccountInput] = useState("");
	const [transactionInput, setTransactionInput] = useState("");
	// -----------functions------------
	const handleGetUsers = async () => {
		const respond = await axios.get(uri + "/bankReact/users");
		setUsers(respond.data);
	};

	const handleAllAccount = async () => {
		const respond = await axios.get(uri + "/bankReact/accounts");
		setAccounts(respond.data);
	};

	const handleLogs = async () => {
		const respond = await axios.get(uri + "/bankReact/users/transacrions/");
		setTransactions(respond.data);
	};

	const handleUserSearch = async () => {
		const respond = await axios.post(uri + "/bankReact/users/getclient", {
			email: userInput,
		});
		console.log(respond.data);
	};
	const handleAccountSearch = async () => {
		const respond = await axios.post(uri + "/bankReact/users/getaccount", {
			email: accountInput,
		});
		console.log(respond.data);
	};
	const handleTransactionSearch = async () => {
		const respond = await axios.post(
			uri + "/bankReact/users/transacrions/email",
			{
				fromEmail: transactionInput,
			}
		);
		console.log(respond.data);
	};

	// -------------create HTML-----------------
	return (
		<div>
			<h1>Information</h1>
			<button onClick={() => handleGetUsers()}>
				Click here fo all Clients
			</button>
			<ul>
				{users.map((user) => {
					return (
						<li key={user._id}>
							{user.name},{user.email},{user._id}
						</li>
					);
				})}
			</ul>
			<button onClick={() => handleAllAccount()}>All Accounts</button>
			<ul>
				{accounts.map((acc) => {
					return (
						<li key={acc._id}>
							{acc.email},{acc.cash},{acc.credit}
						</li>
					);
				})}
			</ul>
			<button onClick={() => handleLogs()}>Transactions logs</button>

			{transactions.map((transAction) => {
				return (
					<div key={transAction._id}>
						<table>
							<tr>
								<th>from Email</th>
								<th>to Email</th>
								<th>msg</th>
								<th>Date</th>
							</tr>
							<tr>
								<td>{transAction.fromEmail}</td>
								<td>{transAction.toEmail}</td>
								<td>{transAction.msg}</td>
								<td>{transAction.date}</td>
							</tr>
						</table>
					</div>
				);
			})}

			<div className="get-by-email">
				<div className="user-by-email">
					<input
						onChange={(e) => {
							setUserInput(e.target.value);
						}}
						type="email"
						placeholder="Type email for user"
						key="1"
					/>
					<button
						onClick={() => {
							handleUserSearch();
						}}
					>
						Search
					</button>
				</div>
				<div className="account-by-email">
					<input
						onChange={(e) => {
							setAccountInput(e.target.value);
						}}
						type="email"
						placeholder="Type email for Account"
						key="2"
					/>
					<button
						onClick={() => {
							handleAccountSearch();
						}}
					>
						Search
					</button>
				</div>
				<div className="transaction-by-email">
					<input
						onChange={(e) => setTransactionInput(e.target.value)}
						type="email"
						placeholder="Type email for Transactions logs"
						key="3"
					/>
					<button
						onClick={() => {
							handleTransactionSearch();
						}}
					>
						Search
					</button>
				</div>
			</div>
		</div>
	);
};

export default Info;
