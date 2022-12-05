import { Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getProducts } from "../../../common/axios-service/AxiosService";
import RecentActivity from "./components/recent-activity/RecentActivity";
import SectionCard from "./components/section-card/SectionCard";
import StatsCard from "./components/stats-card/StatsCard";
import { GridContainer } from "./styles";

function Home({ setSectionActive }) {
	const [lastProds, setLastProds] = useState();

	const getLastProducts = async () => {
		const productsList = await getProducts();

		setLastProds(
			productsList.slice(productsList.length - 3, productsList.length)
		);
	};

	useEffect(() => {
		setSectionActive("home");

		getLastProducts();
	}, []);

	return (
		<GridContainer>
			<Grid container spacing={2} height="100%">
				<Grid style={{ height: "50%" }} item xs={9}>
					<Paper
						style={{ height: "100%", borderRadius: ".8rem" }}
						elevation={10}
					>
						<RecentActivity lastProds={lastProds} />
					</Paper>
				</Grid>
				<Grid style={{ height: "50%" }} item xs={3}>
					<Paper
						style={{ height: "100%", borderRadius: ".8rem" }}
						elevation={10}
					>
						<SectionCard
							sectionTitle={"Mi perfil"}
							btn={"Ir a ajustes"}
							path={"/dashboard/profile"}
						/>
					</Paper>
				</Grid>

				<Grid style={{ height: "50%" }} item xs={6}>
					<Paper
						style={{ height: "100%", borderRadius: ".8rem" }}
						elevation={10}
					>
						<StatsCard />
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper
						style={{ height: "100%", borderRadius: ".8rem" }}
						elevation={10}
					>
						<SectionCard
							sectionTitle={"¿Primeros pasos en la App?"}
							btn={"Saber mas"}
							text={
								"No te olvides de leer la documentacion para saber como utilizar la app de manera correcta"
							}
							path={"/dashboard/profile"}
							icon={"DOCS"}
						/>
					</Paper>
				</Grid>
				<Grid style={{ height: "50%" }} item xs={3}>
					<Paper
						style={{ height: "100%", borderRadius: ".8rem" }}
						elevation={10}
					>
						<SectionCard
							sectionTitle={"¿Necesitas Ayuda?"}
							btn={"Contactar soporte"}
							text={
								"Ponte en contacto con nosotros, detallandonos el problema que estas teniendo y te brindaremos una solucion."
							}
							path={"/dashboard/profile"}
							icon={"HELP"}
						/>
					</Paper>
				</Grid>
			</Grid>
		</GridContainer>
	);
}

export default Home;
