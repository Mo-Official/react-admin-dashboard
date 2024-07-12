import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={Dashboard()}
			></Route>
		</Routes>
	);
}

export default App;
