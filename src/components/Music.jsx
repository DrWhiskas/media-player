import React from 'react';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import '../styles/music.css'

// Define the Music component
export default function Music() {
	const musicData = useSelector((state) => state.music.music);
	console.log(musicData);
	return (
		<section className="music">
			<h2 className="music__title">Music</h2>
			<div className="music__container">
				{musicData.length > 0 ? (
					musicData.map((item, index) => (
						<article key={index}>
							<ReactPlayer
								className="music__container__player"
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
