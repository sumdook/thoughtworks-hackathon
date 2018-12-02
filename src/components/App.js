import React, {Component } from 'react';
import {connect} from 'react-redux';
import  { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import * as actions from '../actions';
import { Layout  } from 'antd';
import Header from './Header';
import Main from './Main';
import './App.css'

const { Footer } = Layout;

class App extends Component{
	
	async componentDidMount(){
		let movies = await axios('http://starlord.hackerearth.com/movieslisting');
		if(!localStorage.getItem('movies')){
			const moviesFinal = {};
			movies.data.map(movie=>{
				movie["watchlist"]=false;
				moviesFinal[movie.movie_title.trim()] = movie;
			});
			localStorage.setItem('movies', JSON.stringify(moviesFinal));
		}
		this.props.hydrateMovies(JSON.parse(localStorage.getItem('movies')));
		const genres = {};
		const languages = {};
		const countries = {}
		movies.data.map(movie=>{
			const genresForMovie = movie.genres.split("|");
			genresForMovie.map(genre=>{
				if(!genres[genre])
					genres[genre]=[];
				genres[genre].push(movie.movie_title.trim());
			});

			if(!languages[movie.language])
				languages[movie.language]=[];
			languages[movie.language].push(movie.movie_title.trim());

			if(!countries[movie.country])
				countries[movie.country]=[];
			countries[movie.country].push(movie.movie_title.trim());
		});

		this.props.hydrateGenres(genres);
		this.props.hydrateLang(languages);
		this.props.hydrateCountry(countries);
	}

	render(){
		return(
			<div>
				<BrowserRouter>
					<Layout className="mainBackground">
						<Header />
						<Main />
						<Footer style={{ textAlign: 'center', verticalAlign:'center', backgroundColor:'transparent' }}>
						<p style={{color:'white'}}>Made with ❤️ by <a style={{color:'white'}} href="http://www.soumiksur.com/">Soumik Sur</a></p>
						</Footer>
					</Layout>
				</BrowserRouter>
			</div>
			);
	}
}

export default connect(null,actions)(App);