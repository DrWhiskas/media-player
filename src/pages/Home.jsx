import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import MusicForm from '../components/MusicForm';
import { IoAddCircleOutline } from 'react-icons/io5';
import Header from '../components/Header';

import '../styles/home.css'

export default function Home() {
    const [isFormIsOpen, setIsFormIsOpen] = useState(false)

    function handleForm(){
        setIsFormIsOpen(!isFormIsOpen)
    }

	return (
		<div className="home">
			<Header />
			<div className="home__container">
				<h1 className="home__container__title">REACT MEDIA PLAYER</h1>
				<div className="home__container__links">
					<button className="home__container__btn" onClick={handleForm}>
						<IoAddCircleOutline />
						Add Music
					</button>
					<Link to="/musiclist">
						<button className="home__container__btn btn-dark">
							Music List
						</button>
					</Link>
				</div>
			</div>
			{isFormIsOpen && <MusicForm closeForm={handleForm} />}
		</div>
	);
}
