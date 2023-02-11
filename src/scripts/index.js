import '../css/styles.css';
import fetchCountries from './api.js'
import debounce from 'lodash.debounce';
//  import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 300;

// fetchCountries("Canada").then(console.log);
const inputEl = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

   inputEl.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY))
//  inputEl.addEventListener('input', onInputChange);

function onInputChange(e) {
 e.preventDefault();
//  console.log('sos');
 let inpValue = '';
 countryInfo.innerHTML = '';
 countryList.innerHTML = '';
  inpValue = e.target.value.trim();
  if (inpValue.length === 0){
    return Notiflix.Notify.info("no country");}

  fetchCountries(inpValue).then((data) =>{
    if (data.length === 1 ) {
        creatCountry(data);
       } else if (data.length > 1 && data.length <= 10 ){
        //   console.log('bu')
        //  console.log(data)
         creatCard(data); 
       } else {
          Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
       };
       
}).catch(onError)
}

function creatCard(data) { 
  const markup = data.map(
      ({ name, flags }) => 
      `<li class="country-item">
      <h2 class="country_title">
      <img class="country-item" src="${flags.svg}" alt="${flags.alt}"  width="30"/>
      ${name.official}</h2>
    </li>`  
       ).join('');
      //  console.log(markup)
       countryList.innerHTML = markup;
 };

 function creatCountry(data) {
  const [{name, flags, capital, population, languages}] = data      
  countryList.innerHTML = 
      `<li class="country-item">
            <h2 class="country_title">
             <img class="country-item" src="${flags.svg}" alt="${flags.alt}" width="30"/>
             ${name.official}</h2>
      </li>`  
    countryInfo.innerHTML =
    `
        <p><b>Capital:</b>  ${capital}</p>
        <p><b>Population:</b>  ${population}</p>
        <p><b>Languages:</b>  ${Object.values(languages).join(', ')}</p>
    `
};

// 
   function onError(err) {
    Notiflix.Notify.failure("Oops, there is no country with that name")
 };






// fetchCountries('peru').then(console.log);


// fetchCountries.js
// fetchCountries(name)

// // name.official - повна назва країни
// // capital - столиця
// // population - населення
// // flags.svg - посилання на зображення прапора
// // languages 
// ------
// Для повідомлень використовуй бібліотеку notiflix 
// і виводь такий рядок "Too many matches found. Please enter a more specific name.".
//  пошук не дав результатів. Додай повідомлення "Oops, there is no country with that name" 


// fetch('https://restcountries.com/v2/name/peru? name= name')
// .then(response => {
//     // console.log(response.json());
//     return response.json();
// }).then(data =>{
//     console.log(data);
// }).catch(error =>{
//     console.log('error:Oops, there is no country with that name' );
// });


// console.log(r)

// 