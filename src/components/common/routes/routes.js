import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/dashboard/home/Home";
import Stock from "../../pages/dashboard/stock/Stock";
import Profile from "../../pages/dashboard/profile/Profile";
import Landing from "../../pages/landing/Landing";

export default function routes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/dashboard/home" element={<Home />} />
				<Route path="/dashboard/stock" element={<Stock />} />
				<Route path="/dashboard/profile" element={<Profile />} />
			</Routes>
		</Router>
	);
}
