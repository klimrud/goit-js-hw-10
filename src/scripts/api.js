
function fetchCountries(name){
    const URL = `https://restcountries.com/v3.1/name/${name}`
    return fetch(URL)
    .then(res => { 
         if (!res.ok) { throw new Error("Oops, there is no country with that name")};
        //  console.log(response.json());
        return res.json();
    })
 }

export default fetchCountries;  