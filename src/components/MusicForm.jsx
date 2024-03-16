import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMusic } from '../features/store.js';
import Modal from './Modal.jsx';
import { IoClose } from 'react-icons/io5';
import '../styles/musicForm.css';

export default function MusicForm({ closeForm }) {
	const dispatch = useDispatch();
	const newData = useSelector((state) => state.music);

	const [formData, setFormData] = useState({
		url: '',
		artist: '',
		title: '',
		album: '',
	});
	const [isModalOpen, setIsModalOpen] = useState(false);

	function closeModal() {
		setIsModalOpen(false);
	}
	function openModal() {
		setIsModalOpen(true);
	}

	function handleSubmit(e) {
		e.preventDefault();

		const isFormValid = Object.values(formData).every(
			(value) => value.trim() !== ''
		);
		if (isFormValid) {
			dispatch(addMusic(formData));
			openModal();
		} else {
			alert('Pas remplis');
		}
	}
	console.log(newData);

	return (
		<section className="music-form">
			<form className="music-form__container" onSubmit={handleSubmit}>
				<div className="music-form__container__header">
					<h2 className="music-form__container__header__title">
						Add a new music
					</h2>
					<button
						className="music-form__container__header__close"
						onClick={closeForm}
					>
						<IoClose />
					</button>
				</div>

				<label htmlFor="url">URL</label>
				<input
					type="text"
					id="url"
					name="url"
					value={formData.url}
					onChange={(e) => setFormData({ ...formData, url: e.target.value })}
				/>
				<label htmlFor="lastName">Artist</label>
				<input
					type="text"
					id="artist"
					name="artist"
					value={formData.artist}
					onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
				/>
				<label htmlFor="lastName">Title</label>
				<input
					type="text"
					id="title"
					name="title"
					value={formData.title}
					onChange={(e) => setFormData({ ...formData, title: e.target.value })}
				/>
				<label htmlFor="lastName">Album</label>
				<input
					type="text"
					id="album"
					name="album"
					value={formData.album}
					onChange={(e) => setFormData({ ...formData, album: e.target.value })}
				/>
				<button type="submit" className="music-form__btn btn-dark">
					Add
				</button>
			</form>
			{isModalOpen && (
				<Modal closeModal={closeModal} messageModal="Music Added !" />
			)}
		</section>
	);
}
