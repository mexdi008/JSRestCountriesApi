const http = new XMLHttpRequest();
http.onload = function () {
    const data = JSON.parse(http.responseText);
    for (let country of data) {
        document.getElementById("root").innerHTML += `
      <div class="card" style="width: 16rem;">
        <img src="${country.flags.svg}" class="card-img-top" height="150" alt="${country.name.common} flag">
        <div class="card-body">
          <h5 class="card-title country">${country.name.common}</h5>
          <p class="my-1"><strong>Population:</strong> ${country?.population.toLocaleString('en-US')}</p>
          <p class="my-1"><strong>Region:</strong> ${country?.region}</p>
          <p class="my-1"><strong>Capital:</strong> ${country?.capital}</p>
        </div>
      </div>
    `;
    }
};
http.open("GET", "https://restcountries.com/v3.1/all");
http.send();
