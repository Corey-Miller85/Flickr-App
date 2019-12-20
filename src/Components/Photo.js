import React, { Component } from "react";
import "../CSS/Photo.css";

class Photo extends Component {
	render() {
		return (
			<li className='Photo'>
				<img
					className='Photo-img'
					src={this.props.url}
					alt={this.props.alt}
				/>
			</li>
		);
	}
}

export default Photo;
