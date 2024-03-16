import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/store";
import { LogOut } from "lucide-react";

// Import custom styles
import '../styles/header.css'

// Define the Header component
export default function Header(){
	// Use Redux to access the login state
	const user = useSelector((state) => state.login);
	// Extract the user's name from the token
	const userName = user.token.pseudo;
	// Use React Router for navigation
	const navigate = useNavigate();
	// Get the dispatch function from Redux
	const dispatch = useDispatch();

	// Function to handle user logout
	function handleDisconnected() {
		// Dispatch the logout action
		dispatch(logout());
		// Navigate to the login page
		navigate('/');
	}
	// Function to build a link with text
	function BuildLink({ link, text }) {
		return (
			<Link to={link}>
				<li className="header__links__link">{text}</li>
			</Link>
		);
	}
	// Render the header with links and logout button
	return (
		<header className="header">
			<ul className="header__links">
				<BuildLink link="/home" text="Home" />
				<BuildLink link="/musiclist" text="Musics" />
			</ul>
			<div className="header__user">
				<button className="header__user__logout" onClick={handleDisconnected}>
					<LogOut />
				</button>
			</div>
		</header>
	);
}