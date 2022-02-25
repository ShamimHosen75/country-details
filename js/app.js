const loadCountries = () => {
    const allBtn = document.getElementById("all");
    const asiaBtn = document.getElementById("asia");
    const europeBtn = document.getElementById("europe");
    const africaBtn = document.getElementById("africa");
    const americasBtn = document.getElementById("americas");
    const oceaniaBtn = document.getElementById("oceania");
     //   Load Data 
    const fetchData = (url) => {
      fetch(url)
        .then((res) => res.json())
        .then((countries) => displayCountries(countries));
    };
    window.addEventListener("load", () => {
      fetchData("https://restcountries.com/v3.1/all");
    });
    allBtn.addEventListener("click", (e) => {
      fetchData("https://restcountries.com/v3.1/all");
    });
    asiaBtn.addEventListener("click", (e) => {
      fetchData("https://restcountries.com/v3.1/region/asia");
    });
    europeBtn.addEventListener("click", (e) => {
      fetchData("https://restcountries.com/v3.1/region/europe");
    });
    africaBtn.addEventListener("click", (e) => {
      fetchData("https://restcountries.com/v3.1/region/africa");
    });
    americasBtn.addEventListener("click", (e) => {
      fetchData("https://restcountries.com/v3.1/region/americas");
    });
    oceaniaBtn.addEventListener("click", (e) => {
      fetchData("https://restcountries.com/v3.1/region/oceania");
    });
  };
  loadCountries();
  
   //   Display Data 
  const displayCountries = (countries) => {
  const countriesDiv = document.getElementById("countries");
  countriesDiv.textContent = "";
  countries.forEach((country) => {
  const singleCountry = document.createElement("div");
 // console.log(country);
  countriesDiv.appendChild(singleCountry);
   let currency = "";
      for (const key in country.currencies) {
        if (Object.hasOwnProperty.call(country.currencies, key)) {
          const element = country.currencies[key];
          currency = element;
        }
    }
  
      singleCountry.classList.add("single-country", "col-12", "col-md-4");
      singleCountry.innerHTML = `
          <div class="bg-light p-4 shadow-sm rounded">
          <h6 class="country-name"><img style="width:35px" src="${country.flags.svg}"> ${country.name.common} (${country.cca2})</h6>
          <p class="country-info"><strong>Capital: </strong>${country.capital}</p>
          <p class="country-info"><strong>Currencies: </strong>${currency.name}</p>
          <p class="country-info"><strong>Population: </strong>${country.population}</p>
          <p class="country-info"><strong>Region: </strong>${country.region}</p>
          <p class="country-info"><strong>Time Zone: </strong>${country.timezones}</p>
          </div>
        `;
    });
  };