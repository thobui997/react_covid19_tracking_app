import axios from "axios";

const URL = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
	let changeableUrl = URL;

	if (country) {
		changeableUrl = `${URL}/countries/${country}`;
	}
	try {
		const {
			data: { confirmed, recovered, deaths, lastUpdate },
		} = await axios.get(changeableUrl);

		console.log(await axios.get(changeableUrl));

		const modifiedData = {
			confirmed,
			recovered,
			deaths,
			lastUpdate,
		};

		return modifiedData;
	} catch (error) {
		return error;
	}
};

export const fetchDailyData = async (country) => {
	try {
		const { data } = await axios.get(
			"https://api.covidtracking.com/v1/us/daily.json",
		);
		return data.map(({ positive, recovered, death, dateChecked: date }) => ({
			confirmed: positive,
			recovered,
			deaths: death,
			date,
		}));
	} catch (error) {
		return error;
	}
};

export const fetchCountries = async () => {
	try {
		const {
			data: { countries },
		} = await axios.get(`${URL}/countries`);

		return countries.map((country) => country.name);
	} catch (error) {
		return error;
	}
};
