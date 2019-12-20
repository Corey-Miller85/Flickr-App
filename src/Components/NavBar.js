import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/NavBar.css";

class NavBar extends Component {
	render() {
		return (
			<div className='NavBar'>
				<h1>Flikr Search App</h1>
				<ul>
					<li>
						<NavLink className='NavBar-Link' exact to='/forest'>
							Pictures of Trees
						</NavLink>
					</li>
					<li>
						<NavLink className='NavBar-Link' exact to='/city'>
							Pictures of Cities
						</NavLink>
					</li>
					<li>
						<NavLink className='NavBar-Link' exact to='/space'>
							Pictures of Space
						</NavLink>
					</li>
				</ul>
			</div>
		);
	}
}

export default NavBar;
