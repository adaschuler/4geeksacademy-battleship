import React, { useState } from "react";

//include images into your bundle
import github from "../../img/github.png";

//create your first component
const Home = () => {
	const [ship, setShip] = useState(false);
	const [squareselect, setSquareselect] = useState(false);

	const Board = () => {
		// 0 = empty
		// 1 = part of a ship
		// 2 = a sunken part of a ship
		// 3 = a missed shot

		let gameBoard = [
			[1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
		];

		let ships = {
			portaaviones: 5,
			buque: 4,
			submarino: 3,
			crucero: 3,
			lancha: 1,
			hundido: 0
		};
	};

	const fireTorpedo = () => {
		setShip(!ship);
	};

	return (
		<div className="text-center mt-5">
			<h3>Battleship Clone React.js</h3>
			<div className="container justify-content-center">
				<div className="box-one justify-content-center">
					<h3>Player One</h3>

					<div className="col">
						<div className="littlebox">/</div>
						<div className="littlebox">1</div>
						<div className="littlebox">2</div>
						<div className="littlebox">3</div>
						<div className="littlebox">4</div>
						<div className="littlebox">5</div>
						<div className="littlebox">6</div>
						<div className="littlebox">7</div>
						<div className="littlebox">8</div>
						<div className="littlebox">9</div>
						<div className="littlebox">10</div>
					</div>
					<div className="col">
						<div className="littlebox">A</div>
						<div className="littlebox">
							<div
								onClick={() => fireTorpedo()}
								className={ship ? "square_active" : "square"}>
								00
							</div>
						</div>
						<div className="littlebox">
							<div
								onClick={() => fireTorpedo()}
								className={ship ? "square_active" : "square"}>
								00
							</div>
						</div>
						<div className="littlebox">
							<div
								onClick={() => fireTorpedo()}
								className={ship ? "square_active" : "square"}>
								00
							</div>
						</div>
						<div className="littlebox">
							<div
								onClick={() => fireTorpedo()}
								className={ship ? "square_active" : "square"}>
								00
							</div>
						</div>
						<div className="littlebox">
							<div
								onClick={() => fireTorpedo()}
								className={ship ? "square_active" : "square"}>
								00
							</div>
						</div>
						<div className="littlebox">
							<div
								onClick={() => fireTorpedo()}
								className={ship ? "square_active" : "square"}>
								00
							</div>
						</div>
						<div className="littlebox">
							<div
								onClick={() => fireTorpedo()}
								className={ship ? "square_active" : "square"}>
								00
							</div>
						</div>
						<div className="littlebox">
							<div
								onClick={() => fireTorpedo()}
								className={ship ? "square_active" : "square"}>
								00
							</div>
						</div>
						<div className="littlebox">
							<div
								onClick={() => fireTorpedo()}
								className={ship ? "square_active" : "square"}>
								00
							</div>
						</div>
						<div className="littlebox">
							<div
								onClick={() => fireTorpedo()}
								className={ship ? "square_active" : "square"}>
								00
							</div>
						</div>
					</div>
					<div className="col">
						<div className="littlebox">B</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
					</div>
					<div className="col">
						<div className="littlebox">C</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">
							<div
								onClick={() => fireTorpedo()}
								className={ship ? "square_active" : "square"}>
								00
							</div>
						</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
					</div>
					<div className="col">
						<div className="littlebox">D</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
					</div>
					<div className="col">
						<div className="littlebox">E</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
					</div>
					<div className="col">
						<div className="littlebox">F</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
					</div>
					<div className="col">
						<div className="littlebox">G</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
					</div>
					<div className="col">
						<div className="littlebox">H</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
					</div>
					<div className="col">
						<div className="littlebox">I</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
					</div>
					<div className="col">
						<div className="littlebox">J</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
					</div>
				</div>
				<div className="box-two justify-content-center">
					<h3>Player IA</h3>

					<div className="col">
						<div className="littlebox">/</div>
						<div className="littlebox">1</div>
						<div className="littlebox">2</div>
						<div className="littlebox">3</div>
						<div className="littlebox">4</div>
						<div className="littlebox">5</div>
						<div className="littlebox">6</div>
						<div className="littlebox">7</div>
						<div className="littlebox">8</div>
						<div className="littlebox">9</div>
						<div className="littlebox">10</div>
					</div>
					<div className="col">
						<div className="littlebox">A</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
					</div>
					<div className="col">
						<div className="littlebox">B</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
					</div>
					<div className="col">
						<div className="littlebox">C</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
					</div>
					<div className="col">
						<div className="littlebox">D</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
					</div>
					<div className="col">
						<div className="littlebox">E</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
					</div>
					<div className="col">
						<div className="littlebox">F</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
					</div>
					<div className="col">
						<div className="littlebox">G</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
					</div>
					<div className="col">
						<div className="littlebox">H</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
					</div>
					<div className="col">
						<div className="littlebox">I</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
					</div>
					<div className="col">
						<div className="littlebox">J</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
						<div className="littlebox">00</div>
					</div>
				</div>
			</div>
			<div>
				<p>
					<button
						id="start"
						type="button"
						className="btn btn-dark m-1">
						Start
					</button>
					<button
						id="rotate"
						type="button"
						className="btn btn-dark m-1">
						Rotate ship
					</button>
				</p>
			</div>
			<div className="justify-content-center">
				<h3>Select your ships</h3>
				<div className="box-ships">
					<div className="ship lancha-container" draggable="true">
						<div className="lancha-0"></div>
					</div>
					<div className="ship submarino-container" draggable="true">
						<div className="submarino-0"></div>
						<div className="submarino-1"></div>
						<div className="submarino-2"></div>
					</div>
					<div className="ship crucero-container" draggable="true">
						<div className="crucero-0"></div>
						<div className="crucero-1"></div>
						<div className="crucero-2"></div>
					</div>
					<div className="ship buque-container" draggable="true">
						<div className="buque-0"></div>
						<div className="buque-1"></div>
						<div className="buque-2"></div>
						<div className="buque-3"></div>
					</div>
					<div
						className="ship portaaviones-container"
						draggable="true">
						<div className="portaaviones-0"></div>
						<div className="portaaviones-1"></div>
						<div className="portaaviones-2"></div>
						<div className="portaaviones-3"></div>
						<div className="portaaviones-4"></div>
					</div>
				</div>
			</div>
			<div>
				<p>
					Made by <img src={github} width="30px" height="30px" />{" "}
					<a href="https://github.com/adaschuler">Ada Schüler</a>,
					with love!
				</p>
			</div>
		</div>
	);
};
export default Home;
