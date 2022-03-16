const loadCountries = () => {
	fetch('https://restcountries.com/v3.1/all')
		.then(res => res.json())
		.then(data => displayCountries(data));
}
const displayCountries = (countries) => {
	console.log(countries[0]);
	const countryHtml = countries.map(country => getCountryHtml(country));
	const countriesContainer = document.getElementById('countries');
	countriesContainer.innerHTML = countryHtml.join(' ');
	
};
// variable destructuring in the parameter sections 
const getCountryHtml = ({name, flags, capital, area}) => {
	return `
	<div class="country-wrap">
		<img src="${flags.png}" alt="" class = ''>
		<h2 class ='countryName'> ${name.common} </h2>
		<h3> Capital : ${capital} </h3> 
		<h3> Area : ${area} </h3> 
	</div>
	`
}
// variable destracturing
	// option one 
/* const getCountryHtml = country => {
	
	const { name, flags } = country;
	return `
	<div class="country-wrap">
		<img src="${flags.png}" alt="" class = ''>
		<h2 class = 'countryName'> ${name.common} </h2> 
	</div>
	`
} */
// this is the normal process 
/* const getCountryHtml = country => {

	return `
	<div class="country-wrap">
		<img src="${country.flags.png}" alt="" class = ''>
		<h2 class = 'countryName'> ${country.name.common} </h2> 
	</div>
	`
	} */
loadCountries();