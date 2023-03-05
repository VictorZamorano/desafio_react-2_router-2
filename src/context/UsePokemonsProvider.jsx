import { useContext, useEffect, useState } from "react";
import { pokemonsContext } from "./Context";

export const usePokemonContext = () => useContext(pokemonsContext);

export default function UsePokemonsProvider({ children }) {
	const [pokemons, setPokemons] = useState();

	const pokeApi = async () => {
		try {
			const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
			const data = await res.json();
			setPokemons(data.results);
		} catch (error) {
			console.error("This is the error " + error);
		}
	};

	useEffect(() => {
		pokeApi();
	}, []);

	return (
		<pokemonsContext.Provider value={{ pokemons, setPokemons }}>
			{children}
		</pokemonsContext.Provider>
	);
}
