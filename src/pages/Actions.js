import axios from "axios";
import React, { useState } from "react";
// --------------------------------------

// const uri = "https://bapibank.herokuapp.com";
const uri = "http://localhost:3007";

const Actions = () => {
	// ----------states--------------------
	const [withdrawEmail, setWithdrawEmail] = useState("");
	const [withdrawAmount, setWithdrawAmount] = useState(0);
	const [depositEmail, setDepositEmail] = useState("");
	const [depositAmount, setDepositAmount] = useState("");
	const [transferFromEmail, setTransferFromEmail] = useState("");
	const [transferToEmail, setTransferToEmail] = useState("");
	const [transferAmount, setTransferAmount] = useState("");
	const [depositMsgToUser, setDepositMsgToUser] = useState("");
	const [withdrawMsgToUser, setWithdrawMsgToUser] = useState("");
	const [createMsgToUser, setCreateMsgToUser] = useState("");
	const [transferMsgToUser, setTransferMsgToUser] = useState("");
	const [createNameInput, setCreateNameInput] = useState("");
	const [createEmailInput, setCreateEmailInput] = useState("");

	// ---------functions/handlers----------
	const handleWithdraw = async () => {
		setWithdrawMsgToUser("");
		try {
			const resp = await axios.post(`${uri}/bankReact/users/withdraw`, {
				email: withdrawEmail,
				amount: withdrawAmount,
			});
			setWithdrawMsgToUser(resp.data);
		} catch (e) {
			setWithdrawMsgToUser("unable to find user");
		}
	};
	const handleDeposit = async () => {
		setDepositMsgToUser("");
		try {
			const resp = await axios.post(`${uri}/bankReact/users/deposit`, {
				email: depositEmail,
				amount: depositAmount,
			});
			setDepositMsgToUser("deposited");
		} catch (e) {
			setDepositMsgToUser("unable to find user.");
		}
	};
	const handleTransfer = async () => {
		setTransferMsgToUser("");
		try {
			const resp = await axios.post(`${uri}/bankReact/users/transfer`, {
				fromEmail: transferFromEmail,
				toEmail: transferToEmail,
				amount: transferAmount,
			});
			setTransferMsgToUser(resp.data);
		} catch (e) {
			setTransferMsgToUser("unable to make transfer");
		}
	};
	const handleCreate = async () => {
		setCreateMsgToUser("");

		try {
			const resp = await axios.post(`${uri}/bankReact/users`, {
				name: createNameInput,
				email: createEmailInput,
			});
			setCreateMsgToUser(resp.data);
		} catch (e) {
			setCreateMsgToUser("unable to create");
		}
	};

	// ---------JSX HTML-------------------
	return (
		<div
			className="main-container"
			style={{ display: "flex", justifyContent: "space-around" }}
		>
			<div className="create-user">
				<h1>Create Client</h1>
				<label htmlFor="text">name</label>
				<br />
				<input
					onChange={(e) => {
						setCreateNameInput(e.target.value);
					}}
					type="text"
				/>
				<br />
				<label htmlFor="email">email</label>
				<br />
				<input
					onChange={(e) => setCreateEmailInput(e.target.value)}
					type="email"
					name=""
					id=""
				/>
				<br />
				<button onClick={() => handleCreate()}>Create</button>
				<h6>{createMsgToUser}</h6>
			</div>
			<div className="withdraw">
				<h1>withdraw</h1>
				<label htmlFor="emali">email</label>
				<br />
				<input
					onChange={(e) => setWithdrawEmail(e.target.value)}
					type="email"
					name="email"
				/>
				<br />
				<label htmlFor="amount">amount</label>
				<br />
				<input
					onChange={(e) => setWithdrawAmount(e.target.value)}
					type="number"
					name="amount"
				/>
				<br />
				<button onClick={() => handleWithdraw()}>Withdraw</button>
				<h6>{withdrawMsgToUser}</h6>
			</div>
			<div className="deposit">
				<h1>deposit</h1>
				<label htmlFor="emali">email</label>
				<br />
				<input
					onChange={(e) => setDepositEmail(e.target.value)}
					type="email"
					name="email"
				/>
				<br />
				<label htmlFor="amount">amount</label>
				<br />
				<input
					onChange={(e) => setDepositAmount(e.target.value)}
					type="number"
					name="amount"
				/>
				<br />
				<button onClick={(e) => handleDeposit()}>deposit</button>
				<h6>{depositMsgToUser}</h6>
			</div>
			<div className="transfer">
				<h1>transfer</h1>
				<label htmlFor="fromEmali">from-Email</label>
				<br />
				<input
					onChange={(e) => setTransferFromEmail(e.target.value)}
					type="fromEmail"
					name="email"
				/>
				<br />
				<label htmlFor="toEmali">To-Email</label>
				<br />
				<input
					onChange={(e) => setTransferToEmail(e.target.value)}
					type="toEmail"
					name="email"
				/>
				<br />
				<label htmlFor="amount">amount</label>
				<br />
				<input
					onChange={(e) => setTransferAmount(e.target.value)}
					type="number"
					name="amount"
				/>
				<br />
				<button onClick={(e) => handleTransfer()}>transfer</button>
				<h6>{transferMsgToUser}</h6>
			</div>
		</div>
	);
};

export default Actions;
