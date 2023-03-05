import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePokemonContext } from "../context/UsePokemonsProvider";

export default function Pokemons() {
	const { pokemons } = usePokemonContext();
	const navigate = useNavigate();

	const [selected, setSelected] = useState();

	const pokeId = (url) => {
		const pokeSplit = url.split("/");
		const pokeId = pokeSplit[pokeSplit.length - 2];
		return pokeId;
	};
	const handleClick = () => {
		navigate(`/pokemons/${selected}`);
	};

	return (
		<div className="pWallpaper position-relative">
			<div className="position-absolute top-0 start-50 translate-middle-x mt-4">
				<h2 className="text-center text-warning">Selecciona un Pokemon</h2>
				<select
					value={selected}
					onChange={(e) => setSelected(e.target.value)}
					name="pokemonSelect"
					className="form-select-lg mb-2"
					aria-label="Default select example"
				>
					<option value="0">Elige el pokemon</option>
					{pokemons?.map((pokemon) => {
						return (
							<option value={pokeId(pokemon.url)} key={pokeId(pokemon.url)}>
								{pokeId(pokemon.url)} -{" "}
								{pokemon.name.charAt(0).toUpperCase() +
									pokemon.name.substr(1).toLowerCase()}
							</option>
						);
					})}
				</select>
				<button
					onClick={handleClick}
					className="btn btn-warning p-2 ms-3 mb-2 fw-bolder"
					type="button"
				>
					BUSCAR
				</button>
			</div>
		</div>
	);
}
