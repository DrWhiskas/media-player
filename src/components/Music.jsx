import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import SearchBar from './SearchBar';
import '../styles/music.css'

// Define the Music component
export default function Music() {
	const musicData = useSelector((state) => state.music.music);
	console.log(musicData);
	//Filtering
	const [searchResults, setSearchResults] = useState('')
	function inputText (e) {
		const lowerCase = e.target.value.toLowerCase()
		setSearchResults(lowerCase)
	}

	function filter(e){
		
	}

	return (
		<section className="music">
			<h2 className="music__title">Music</h2>
			<SearchBar  />
			<div className="music__container">
				{musicData.length > 0 ? (
					musicData.map((item, index) => (
						<article className="music__container__player" key={index}>
							<ReactPlayer
								width="calc(150px + 20vw)"
								height="30vh"
								controls={true}
								url={item.url}
								title={item.title}
								artist={item.artist}
								album={item.album}
							/>
						</article>
					))
				) : (
					<p>No music found</p>
				)}
			</div>
		</section>
	);
}
