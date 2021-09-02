import React from "react";
import { Link } from "react-router-dom";
import starWars from "../../img/star-wars.png";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container d-flex justify-content-between">
				<a className="navbar-brand" href="/">
					<img src={starWars} width="180" alt="starwars logo" />
				</a>
				<div className="my-auto">
					<Link to="/demo">
						<button className="btn btn-lg btn-dark rounded-pill">
							<i className="fab fa-jedi-order" /> Check the Context in action
						</button>
					</Link>
				</div>
				&nbsp;
				<div className="btn-group m-2">
					<button
						type="button"
						className="btn btn-lg btn-dark rounded-pill"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites &nbsp;
						<span className="badge badge-dark">
							<i className="far fa-heart" /> 4
						</span>
					</button>
					<div className="dropdown-menu dropdown-menu-right">
						<div className="dropdown-item d-flex justify-content-between text-wrap">
							<p className="m-2">Luck Skywalker</p>
							<button className="m-2 border-0 bg-transparent" type="button">
								<i className="far fa-trash-alt" />
							</button>
						</div>
						<div className="dropdown-item d-flex justify-content-between text-wrap">
							<p className="m-2">Luck Skywalker and la estrella de la muete</p>
							<button className="m-2 border-0 bg-transparent" type="button">
								<i className="far fa-trash-alt" />
							</button>
						</div>
						<div className="dropdown-item d-flex justify-content-between">
							<p className="m-2">Luck Skywalker</p>
							<button className="m-2 border-0 bg-transparent" type="button">
								<i className="far fa-trash-alt" />
							</button>
						</div>
						<div className="dropdown-item d-flex justify-content-between">
							<p className="m-2">Luck Skywalker</p>
							<button className="m-2 border-0 bg-transparent" type="button">
								<i className="far fa-trash-alt" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
