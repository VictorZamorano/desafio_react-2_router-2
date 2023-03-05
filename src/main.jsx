import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import UsePokemonsProvider from "./context/UsePokemonsProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<UsePokemonsProvider>
				<App />
			</UsePokemonsProvider>
		</BrowserRouter>
	</React.StrictMode>
);
