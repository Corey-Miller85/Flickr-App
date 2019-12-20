import React, { Component } from "react";
import axios from "axios";
import apiKey from "./config";
import Photo from "./Photo";

class Gallery extends Component {
	constructor(props) {
		super(props);

		this.state = {
			photos: []
		};
	}

	componentDidMount() {
		this.getPhotos(this.props.match.params.query);
	}

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
			.then(console.log("ran full get request"));
	};

	render() {
		let photos = this.state.photos.map(item => {
			let farm = item.farm;
			let server = item.server;
			let id = item.id;
			let secret = item.secret;
			let title = item.title;
			return (
				<Photo
					url={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
					alt={title}
				/>
			);
		});
		return <div>{photos}</div>;
	}
}

export default Gallery;
