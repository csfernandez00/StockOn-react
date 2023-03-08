import React from "react";
import { useEffect } from "react";

function Clients({ setSectionActive }) {
	useEffect(() => {
		setSectionActive("clients");
	}, []);

	return <div>Clients</div>;
}

export default Clients;
