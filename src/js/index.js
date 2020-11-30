//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components

function Home(props) {
	return (
		<div className="fondo">
			<div className="icon-reloj">
				<i className="reloj far fa-clock" />
			</div>
			<div className="cuadro">
				<h1 className="reloj">{props.six}</h1>
			</div>
			<div className="cuadro">
				<h1 className="reloj">{props.five}</h1>
			</div>
			<div className="cuadro">
				<h1 className="reloj">{props.four}</h1>
			</div>
			<div className="cuadro">
				<h1 className="reloj">{props.three}</h1>
			</div>
			<div className="cuadro">
				<h1 className="reloj">{props.two}</h1>
			</div>
			<div className="cuadro">
				<h1 className="reloj">{props.one}</h1>
			</div>
		</div>
	);
}

Home.propTypes = {
	one: PropTypes.number,
	two: PropTypes.number,
	three: PropTypes.number,
	four: PropTypes.number,
	five: PropTypes.number,
	six: PropTypes.number
};

let counter = 0;
let secondOne = 0;
let secondTwo = 0;
let minuteOne = 0;
let minuteTwo = 0;
let hourOne = 0;
let hourTwo = 0;
setInterval(function() {
	if (counter == 10) {
		counter = 0;
		secondTwo += 1;
	}
	if (secondTwo == 6) {
		secondTwo = 0;
		minuteOne += 1;
	}
	if (minuteOne == 10) {
		minuteTwo += 1;
		minuteOne = 0;
	}
	if (minuteTwo == 6) {
		minuteTwo = 0;
		hourOne += 1;
	}
	if (hourOne == 10) {
		hourOne = 0;
		hourTwo += 1;
	}
	secondOne = counter;
	counter += 1;
	ReactDOM.render(
		<Home
			one={secondOne}
			two={secondTwo}
			three={minuteOne}
			four={minuteTwo}
			five={hourOne}
			six={hourTwo}
		/>,
		document.querySelector("#app")
	);
}, 1000);

//render your react application
ReactDOM.render(Home(), document.querySelector("#app"));
