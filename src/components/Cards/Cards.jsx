import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./Cards.module.css";
import CardComponent from "./Card/Card";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	return (
		<div className={styles.container}>
			<Grid container spacing={3}>
				<CardComponent
					className={styles.infected}
					title="Infected"
					value={confirmed?.value}
					date={lastUpdate}
					body="Number of active cases from COVID-19."
				/>
				<CardComponent
					className={styles.recovered}
					title="Recovered"
					value={recovered?.value}
					date={lastUpdate}
					body="Number of recoveries from COVID-19."
				/>
				<CardComponent
					className={styles.deaths}
					title="Deadths"
					value={deaths?.value}
					date={lastUpdate}
					body="Number of deaths caused by COVID-19."
				/>
			</Grid>
		</div>
	);
};

export default Cards;
