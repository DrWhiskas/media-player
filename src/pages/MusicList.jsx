import React from "react";
import Music from "../components/Music";
import Header from '../components/Header';
import styled from "styled-components";
// Styled-Components

const StyledMusicList = styled.section`
	display: flex;
	position: relative;
	width: 100svw;
`;

export default function MusicList(){
    return (
			<StyledMusicList>
				<Header />
				<Music />
			</StyledMusicList>
		);
}