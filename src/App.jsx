import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Pokemons from "./views/Pokemons";
import PokemonStats from "./views/PokemonStats";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/pokemons" element={<Pokemons />}></Route>
				<Route path="/pokemons/:id" element={<PokemonStats />}></Route>
			</Routes>
		</div>
	);
}

export default App;
