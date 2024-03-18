import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setToken } from "../features/store";

import styled from "styled-components";
//Styled Components

const StyledLogin = styled.section`
	height: 100svh;
	width: 100svw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledForm = styled.form`
	display: flex;
	position: relative;
	flex-direction: column;
	padding: 1%;
	background-color: #f8f9fe;
	width: calc(200px + 15svw);
	height: calc(250px + 30svh);
	gap: 3%;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
	color: black;
	border-radius: 10px;
`;

const StyledInput = styled.input`
	height: 30px;
	padding: 1%;
	border-top: none;
	border-left: none;
	border-right: none;
	background: none;

	&:focus{
		outline: none;
	}
`;

const StyledButton = styled.button`
	height: 50px;
	font-weight: bold;
	margin-top: 10%;
	border: none;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	&:hover{
		cursor: pointer;
	}
`;
const StyledSubTitle = styled.h2=`
	
`


export default function Login(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
			pseudo: '',
			email: '',
			password: '',
		}); 
    function handleSubmit(e) {
			e.preventDefault();

			const isFormValid = Object.values(formData).every(
				(value) => value.trim() !== ''
			);
			if (isFormValid) {
				dispatch(setToken(formData));
				navigate('/home')
			} else {
				alert('Pas remplis');
			}
		}
        return (
					<StyledLogin>
						<StyledForm onSubmit={handleSubmit}>
							<h2 className="login__container__header__title">Login</h2>
							<label htmlFor="pseudo">Pseudo</label>
							<StyledInput
								type="text"
								id="pseudo"
								name="pseudo"
								value={formData.pseudo}
								onChange={(e) =>
									setFormData({ ...formData, pseudo: e.target.value })
								}
							/>
							<label htmlFor="email">email</label>
							<StyledInput
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
							/>
							<label htmlFor="password">Password</label>
							<StyledInput
								type="password"
								id="password"
								name="password"
								value={formData.password}
								onChange={(e) =>
									setFormData({ ...formData, password: e.target.value })
								}
							/>
							<StyledButton type="submit" className="login__btn btn-dark">
								Login
							</StyledButton>
						</StyledForm>
					</StyledLogin>
				);
}