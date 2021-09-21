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
			portaAviones: 5,
			buque: 4,
			submarino: 3,
			crucero: 3,
			lancha: 3,
			hundido: 0
		};
	};

	const fireTorpedo = () => {
		setShip(!ship);
	};

	return (
		<div className="text-center mt-5 container">
			<div className="grill">
				<h3>Player One</h3>
				<table className="table table-bordered justify-content-center">
					<thead>
						<tr>
							<th className="square">/</th>
							<th className="square">1</th>
							<th className="square">2</th>
							<th className="square">3</th>
							<th className="square">4</th>
							<th className="square">5</th>
							<th className="square">6</th>
							<th className="square">7</th>
							<th className="square">8</th>
							<th className="square">9</th>
							<th className="square">10</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="square">A</td>
							<td>
								<div
									onClick={() => fireTorpedo()}
									className={
										ship ? "square_active" : "square"
									}>
									45
								</div>
							</td>
							<td
								onClick={() => fireTorpedo()}
								className={ship ? "square_active" : "square"}>
								00
							</td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
						</tr>
						<tr>
							<td className="square">B</td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
						</tr>
						<tr>
							<td className="square">C</td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
						</tr>
						<tr>
							<td className="square">D</td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
						</tr>
						<tr>
							<td className="square">E</td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
						</tr>
						<tr>
							<td className="square">F</td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
						</tr>
						<tr>
							<td className="square">G</td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
						</tr>
						<tr>
							<td className="square">H</td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
						</tr>
						<tr>
							<td className="square">I</td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
						</tr>
						<tr>
							<td className="square">J</td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
							<td className="square"></td>
						</tr>
					</tbody>
				</table>
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
