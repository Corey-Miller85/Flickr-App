import React, { Component } from "react";
import "../CSS/Photo.css";

class Photo extends Component {
	render() {
		return (
			<div className='Photo'>
				<img
					className='Photo-img'
					src={this.props.url}
					alt={this.props.alt}
				/>
			</div>
		);
	}
}

export default Photo;
