import React from "react";
import Music from "../components/Music";
import Header from '../components/Header';
import '../styles/musicList.css'
export default function MusicList(){
    return (
			<section className="music-list">
				<Header />
				<Music />
			</section>
		);
}