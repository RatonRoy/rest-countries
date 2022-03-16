const loadCountries = () => {
	fetch('https://restcountries.com/v3.1/all')
		.then(res => res.json())
		.then(data => displayCountries(data));
}
const displayCountries = (countries) => {
	// console.log(countries[0]);
	const countryHtml = countries.map(country => getCountryHtml(country));
	const countriesContainer = document.getElementById('countries');
	countriesContainer.innerHTML = countryHtml.join(' ');
	
};
const getCountryHtml = country => {
	/* variable destracturing  */
	// option one 
	const { name, flags } = country;
	return `
	<div class="country-wrap">
		<img src="${flags.png}" alt="" class = ''>
		<h2 class = 'countryName'> ${name.common} </h2> 
	</div>
	`
	// this is the normal process 
	/* return `
	<div class="country-wrap">
		<img src="${country.flags.png}" alt="" class = ''>
		<h2 class = 'countryName'> ${country.name.common} </h2> 
	</div>
	` */
	}
loadCountries();