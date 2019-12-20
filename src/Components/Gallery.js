import React, { Component } from "react";
import "../CSS/Gallery.css";
import Photo from "./Photo";

class Gallery extends Component {
	render() {
		let photos = this.props.photos.map(item => {
			let farm = item.farm;
			let server = item.server;
			let id = item.id;
			let secret = item.secret;
			let title = item.title;
			return (
				<li>
					<Photo
						url={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
						alt={title}
					/>
				</li>
			);
		});
		return <div className='Gallery'>{photos}</div>;
	}
}

export default Gallery;
