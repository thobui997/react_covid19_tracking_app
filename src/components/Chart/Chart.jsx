import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../../apis";

const LineChart = ({ dailyData }) => {
	return dailyData.length ? (
		<Line
			data={{
				labels: dailyData.map(({ date }) =>
					new Date(date).toLocaleDateString(),
				),
				datasets: [
					{
						data: dailyData.map((data) => data.confirmed),
						label: "Infected",
						borderColor: "#3333ff",
						fill: true,
					},
					{
						data: dailyData.map((data) => data.deaths),
						label: "Deaths",
						borderColor: "red",
						backgroundColor: "rgba(255, 0, 0, 0.5)",
						fill: true,
					},
					{
						data: dailyData.map((data) => data.recovered),
						label: "Recovered",
						borderColor: "green",
						backgroundColor: "rgba(0, 255, 0, 0.5)",
						fill: true,
					},
				],
			}}
		/>
	) : null;
};

const BarChart = ({ confirmed, recovered, deaths, country }) => {
	return confirmed ? (
		<Bar
			data={{
				labels: ["Infected", "Recovered", "Deaths"],
				datasets: [
					{
						label: "People",
						backgroundColor: [
							"rgba(0, 0, 255, 0.5)",
							"rgba(0, 255, 0, 0.5)",
							"rgba(255, 0, 0, 0.5)",
						],
						data: [confirmed.value, recovered.value, deaths.value],
					},
				],
			}}
			options={{
				legend: { display: false },
				title: { display: true, text: `Current state in ${country}` },
			}}
		/>
	) : null;
};

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
	const [dailyData, setDailyData] = useState([]);
	useEffect(() => {
		const fetchAPI = async () => {
			const fetchedDailyData = await fetchDailyData();
			setDailyData(fetchedDailyData);
		};

		fetchAPI();
	}, []);

	return (
		<>
			{country ? (
				<BarChart
					confirmed={confirmed}
					recovered={recovered}
					deaths={deaths}
					country={country}
				/>
			) : (
				<LineChart dailyData={dailyData} />
			)}
		</>
	);
};

export default Chart;
