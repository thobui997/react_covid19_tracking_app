import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "./../../apis";

const CountryPicker = ({ onCountryChange: handleCountryChange }) => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			setCountries(await fetchCountries());
		};
		fetchAPI();
	}, []);

	return (
		<div className={styles.container}>
			<FormControl className={styles.formControl}>
				<NativeSelect
					onChange={(event) => handleCountryChange(event.target.value)}
				>
					<option value="">Global</option>
					{countries.map((country, idx) => (
						<option value={country} key={idx}>
							{country}
						</option>
					))}
				</NativeSelect>
			</FormControl>
		</div>
	);
};

export default CountryPicker;
