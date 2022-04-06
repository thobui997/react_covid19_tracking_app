
# Covid-19 Tracking

A application to tracking covid-19 use reactjs 


## Acknowledgements

 - Know interactive with api use axios library.
 - Understand state and props in reactjs.
 - Know use MUI ui library.
 - Use style css module.

## API Reference

#### Get all data of covid-19 worldwide

```https
  GET https://covid19.mathdro.id/api
```


#### Get all data of covid-19 by country

```httpa
  GET https://covid19.mathdro.id/api/countries/${country}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `country`      | `string` | **Required**. The name of country |


#### Get daily data of covid-19

```https
  GET https://api.covidtracking.com/v1/us/daily.json
```


#### Get list of countries with covid-19

```https
  GET https://covid19.mathdro.id/api/countries
```
