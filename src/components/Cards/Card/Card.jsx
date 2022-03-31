import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import CountUp from "react-countup";

const CardComponent = ({ className, title, value, date, body }) => {
	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card className={className}>
				<CardContent>
					<Typography color="textSecondary" gutterBottom>
						{title}
					</Typography>
					<Typography variant="h5" component="h2">
						<CountUp start={0} end={value} separator="," duration={2.5} />
					</Typography>
					<Typography color="textSecondary">
						{new Date(date).toDateString()}
					</Typography>
					<Typography variant="body2" component="p">
						{body}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default CardComponent;
