import React, { useEffect, useState } from "react";
import LogInCard from "./components/LogInCard";
import RegisterCard from "./components/RegisterCard";
import { Background, Shapes } from "./styles";

export default function LogIn() {
	const [component, setComponent] = useState("LOGIN");
	const [cardLoaded, setCardLoaded] = useState();

	useEffect(() => {
		switch (component) {
			case "LOGIN":
				return setCardLoaded(<LogInCard setComponent={setComponent} />);
			case "REGISTER":
				return setCardLoaded(<RegisterCard setComponent={setComponent} />);
			default:
				break;
		}
	}, [component]);

	return (
		<Background>
			<Shapes></Shapes>
			{cardLoaded ? cardLoaded : null}
		</Background>
	);
}
