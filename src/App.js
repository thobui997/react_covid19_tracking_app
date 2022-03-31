import React, { useEffect, useState } from "react";
import { fetchData } from "./apis";
import Typography from "@mui/material/Typography";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

const App = () => {
	const [data, setData] = useState({});
	const [country, setCountry] = useState("");

	useEffect(() => {
		const fetchAPI = async () => {
			const fetchedData = await fetchData(country);
			setData(fetchedData);
		};

		fetchAPI();
	}, [country]);

	const handleCountryChange = (country) => {
		setCountry(country);
	};

	return (
		<div className={styles.container}>
			<Typography align="center" variant="h2" component="h2" gutterBottom>
				COVID-19 TRACKING
			</Typography>
			<Cards data={data} />
			<CountryPicker onCountryChange={handleCountryChange} />
			<Chart data={data} country={country} />
		</div>
	);
};

export default App;
