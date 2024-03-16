import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setToken } from "../features/store";

import '../styles/login.css'

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
					<section className="login">
						<form className="login__container" onSubmit={handleSubmit}>
							<div className="login__container__header">
								<h2 className="login__container__header__title">Login</h2>
							</div>

							<label htmlFor="pseudo">Pseudo</label>
							<input
								type="text"
								id="pseudo"
								name="pseudo"
								value={formData.pseudo}
								onChange={(e) =>
									setFormData({ ...formData, pseudo: e.target.value })
								}
							/>
							<label htmlFor="email">email</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
							/>
							<label htmlFor="password">Password</label>
							<input
								type="password"
								id="password"
								name="password"
								value={formData.password}
								onChange={(e) =>
									setFormData({ ...formData, password: e.target.value })
								}
							/>
							<button type="submit" className="login__btn btn-dark">
								Login
							</button>
						</form>
					</section>
				);
}