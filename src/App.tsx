import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar";
import React, { useState } from "react";

function App() {
	const [sidebarHidden, setSidebarHidden] = useState(false);
	return (
		<div className={sidebarHidden ? "App-grid-sidebarHidden" : "'App-grid"}>
			<Sidebar
				sidebarHidden={sidebarHidden}
				sidebarHiddenUpdateFunction={setSidebarHidden}
			/>

			<Routes>
				<Route
					path='/'
					element={Dashboard()}
				></Route>

				<Route
					path='/processes'
					element={Dashboard()}
				></Route>
				<Route
					path='/backlog'
					element={Dashboard()}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
