import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MusicList from './pages/MusicList';
import Login from './pages/Login';
import reportWebVitals from './reportWebVitals';
//Styled Component
import GlobalStyle from './GlobalStyles';
//REDUX
import { Provider } from 'react-redux';
import store from './features/store'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<HashRouter>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/musiclist" element={<MusicList />} />
				</Routes>
			</HashRouter>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
