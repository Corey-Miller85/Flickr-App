import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import apiKey from "./Components/config";

import Gallery from "./Components/Gallery";
import SearchedGallery from "./Components/SearchedGallery";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import Error404 from "./Components/Error404";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			forest: [],
			city: [],
			space: [],
			photos: []
		};
	}

	//General Photo Get Request.
	getPhotos = query => {
		axios
			.get(
				`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
			)
			.then(response =>
				this.setState({
					photos: response.data.photos.photo
				})
			)
			.catch(error => {
				console.log("Error fetching and parsing data", error);
			});
	};

	//Gets photos for NavLink Items, stores them in their own state, as to not have to fetch again.
	getHardCodedPhotos = query => {
		axios
			.get(
				`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
			)
			.then(response =>
				this.setState({
					[query]: response.data.photos.photo
				})
			)
			.catch(error => {
				console.log("Error fetching and parsing data", error);
			});
	};

	//Gets the hardcorded photos and stores them in respective states.
	componentDidMount() {
		this.getHardCodedPhotos("forest");
		this.getHardCodedPhotos("city");
		this.getHardCodedPhotos("space");
	}

	render() {
		return (
			<div>
				<NavBar />
				<SearchBar getPhotos={this.getPhotos} />
				<Switch>
					<Route
						exact
						path='/'
						render={props => (
							<Gallery {...props} photos={this.state.forest} />
						)}
					/>
					<Route
						path='/forest'
						render={props => (
							<Gallery {...props} photos={this.state.forest} />
						)}
					/>
					<Route
						path='/city'
						render={props => (
							<Gallery {...props} photos={this.state.city} />
						)}
					/>
					<Route
						path='/space'
						render={props => (
							<Gallery {...props} photos={this.state.space} />
						)}
					/>
					<Route
						path='/query=:query'
						render={props => (
							<SearchedGallery
								{...props}
								photos={this.state.photos}
								getPhotos={this.getPhotos}
							/>
						)}
					/>
					<Route component={Error404} />
				</Switch>
			</div>
		);
	}
}

export default App;
