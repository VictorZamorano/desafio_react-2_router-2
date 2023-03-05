export default function PokemonCard({ pokemon }) {
	return (
		<>
			<div className="position-relative ">
				<div
					className="card mb-3 cb1"
					style={{ minHeight: "20rem", width: "40rem" }}
				>
					<div className="row g-0">
						<div className="col-md-4 d-flex flex-column justify-content-center">
							<img
								/* IMG PKMNS */
								src={pokemon.sprites.other.dream_world.front_default}
								className="img-fluid rounded-start"
								alt={pokemon.name}
							/>
							<div className="container d-flex justify-content-around mt-4">
								{/* TYPE PKMNS */}
								{pokemon.types.map((item) => {
									return (
										<p key={item.type.url} className="text-light fw-bold fs-4">
											{item.type.name.charAt(0).toUpperCase() +
												item.type.name.substr(1).toLowerCase()}{" "}
										</p>
									);
								})}
							</div>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title text-center text-light fs-3">
									{/* NAME PKMNS */}
									{pokemon.name.charAt(0).toUpperCase() +
										pokemon.name.substr(1).toLowerCase()}
								</h5>
								<ul className="list-group bg-dark">
									{/* STATS PKMNS */}
									{pokemon.stats.map((item) => {
										return (
											<li
												className="list-group-item text-warning cb1"
												key={item.stat.url}
											>
												<b>
													{item.stat.name.charAt(0).toUpperCase() +
														item.stat.name.substr(1).toLowerCase()}{" "}
												</b>
												- {item.base_stat}
											</li>
										);
									})}
								</ul>
								<div className="text-center mt-3">
									<h4 className="text-light">Abilities</h4>
									<div className="d-flex flex-row mb-3 justify-content-around ">
										{pokemon.abilities.map((item, index) => {
											/* ABILITIES PKMNS */
											return (
												<p
													className="card-text m-0 text-light fw-bold "
													key={item.slot}
												>
													<b>{index + 1}</b> -{" "}
													{item.ability.name.charAt(0).toUpperCase() +
														item.ability.name.substr(1).toLowerCase()}
												</p>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
