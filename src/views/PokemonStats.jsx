import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

export default function PokemonStats() {
	const { id } = useParams();

	const [pokemon, setPokemon] = useState();

	const pokeApi = async () => {
		try {
			const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
			const data = await res.json();
			setPokemon(data);
		} catch (error) {
			console.error("This is the error " + error);
		}
	};

	useEffect(() => {
		pokeApi();
	}, []);

	return (
		<div className="pWallpaper position-relative">
			<div className="position-absolute top-0 start-50 translate-middle-x mt-4">
				<h2 className="text-center text-warning fs-1 fw-bold">
					Selected Pokemon
				</h2>
				{!!pokemon && <PokemonCard pokemon={pokemon} />}
			</div>
		</div>
	);
}
