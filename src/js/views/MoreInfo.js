import React from "react";
import { Link } from "react-router-dom";
import imgSize800x600 from "../../img/imgSize800x600.png";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

export const MoreInfo = () => {
	return (
		<div className="container">
			<div className="row border-dark border-bottom pb-3">
				<div className="col-sm mt-3 p-1">
					<img
						src={imgSize800x600}
						width="540"
						alt="starwars logo"
						className="img-fluid rounded mx-auto d-block"
					/>
				</div>
				<div className="col-sm p-1">
					<h1 className="my-3 font-weight-bold text-center">Luke Skeywalker</h1>
					<p className="text-center m-3">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
						ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
						dolore eu fugiat nulla pariatur.
					</p>
				</div>
			</div>
			<div className="row my-3">
				<div className="col-sm d-flex flex-column text-center">
					<h4>
						<strong>Name</strong>
					</h4>
					<p>Luke Skeywalker</p>
				</div>
				<div className="col-sm d-flex flex-column text-center">
					<h4>
						<strong>Birth Year</strong>
					</h4>
					<p>19BBY</p>
				</div>
				<div className="col-sm d-flex flex-column text-center">
					<h4>
						<strong>Gender</strong>
					</h4>
					<p>Male</p>
				</div>
				<div className="col-sm d-flex flex-column text-center">
					<h4>
						<strong>Height</strong>
					</h4>
					<p>172</p>
				</div>
				<div className="col-sm d-flex flex-column text-center">
					<h4>
						<strong>Skin Color</strong>
					</h4>
					<p>Fair</p>
				</div>
				<div className="col-sm d-flex flex-column text-center">
					<h4>
						<strong>Eye Color</strong>
					</h4>
					<p>Blue</p>
				</div>
			</div>
		</div>
	);
};
