import React, { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Stock from "../../pages/dashboard/stock/Stock";
import Home from "../../pages/dashboard/home/Home";
import Profile from "../../pages/dashboard/profile/Profile";
import SideBar from "../sidebar/SideBar";
import Header from "../header/Header";
import { SectionContainer } from "./styles";
import { getUser } from "../axios-service/AxiosService";
import Loading from "../loading/Loading";

export default function Rutas() {
	const [userLogged, setUserLogged] = useState();
	const [sectionActive, setSectionActive] = useState("");

	const updateUserInfo = async () => {
		const resUser = await getUser();
		setUserLogged(resUser);
	};

	useEffect(() => {
		updateUserInfo();
		return;
	}, []);

	if (!userLogged) return <Loading />;

	return (
		<Router>
			<Header userLogged={userLogged} />
			<SideBar sectionActive={sectionActive} />
			<SectionContainer>
				<Routes>
					<Route
						exact
						path="/dashboard/home"
						element={
							<Home
								setSectionActive={setSectionActive}
								userLogged={userLogged}
							/>
						}
					/>
					<Route
						exact
						path="/dashboard/stock"
						element={
							<Stock
								setSectionActive={setSectionActive}
								userLogged={userLogged}
								updateUserInfo={updateUserInfo}
							/>
						}
					/>
					<Route
						exact
						path="/dashboard/profile"
						element={
							<Profile
								setSectionActive={setSectionActive}
								userLogged={userLogged}
								updateUserInfo={updateUserInfo}
								setUserLogged={setUserLogged}
							/>
						}
					/>
					<Route
						path="/dashboard/*"
						element={<Navigate to="/dashboard/home" />}
					/>

					<Route path="*" element={<Navigate to="/dashboard/home" />} />
				</Routes>
			</SectionContainer>
		</Router>
	);
}
