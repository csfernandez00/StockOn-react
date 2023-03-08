import React from "react";
import { useEffect } from "react";

function Billing({ setSectionActive }) {
	useEffect(() => {
		setSectionActive("billing");
	}, []);

	return <div>Billing</div>;
}

export default Billing;
