



function fetchCountries(query){
    const URL = `https://restcountries.com/v2/name/${query}`
    return fetch(URL)
    .then(response => {
        // console.log(response.json());
        return response.json();
    }).then(data =>{
        console.log(data);
    }).catch(error =>{
        console.log('error:Oops, there is no country with that name' );
    });
}

export default fetchCountries;  