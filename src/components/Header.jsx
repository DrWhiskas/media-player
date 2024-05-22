import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/store";
import { LogOut } from "lucide-react";

// Import custom styles
import styled from "styled-components";

//Styled Components
const StyledHeader = styled.header`
	display: flex;
	position: fixed;
	z-index: 1;
	justify-content: center;
	width: 100%;
	top: 5%;
	background-color: #738cf3;
`;

const StyledList = styled.ul`
	display: flex;
	font-size: calc(14px + 0.6vw);
	gap: 20%;
`;

const StyledLink = styled(Link)`
	color: white;
	font-weight: bold;
	letter-spacing: 3px;
	transition: all ease-in-out 0.2s;

	&:hover {
		color: black;
	}
`;

const StyledHeaderUser = styled.div`
		position: absolute;
		left: 93%;
		display: flex;
		font-size: calc(14px + 0.6vw);
		gap: 20%;
`;

const StyledButton = styled.button`
	border: none;
	background: none;
	color: white;

	&:hover {
		cursor: pointer;
		font-size: larger;
	}
`;


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
			<StyledLink to={link}>
				<li className="header__links__link">{text}</li>
			</StyledLink>
		);
	}
	// Render the header with links and logout button
	return (
		<StyledHeader>
			<StyledHeaderUser className="header__user">
				<StyledButton  onClick={handleDisconnected}>
					<LogOut />
				</StyledButton>
			</StyledHeaderUser>
		</StyledHeader>
	);
}