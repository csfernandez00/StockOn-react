import React, { useEffect } from "react";

function Home({ setSectionActive }) {
	useEffect(() => {
		setSectionActive("home");
	}, []);

	return <div>Hola</div>;
}

export default Home;
