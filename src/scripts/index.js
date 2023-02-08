import '../css/styles.css';
import fetchCountries from './api.js'
// import lodash from 'lodash.debounce';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 300;


const inputEl = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
// console.log(inputEl);
// console.log(countryList);
// console.log(countryInfo);

// inputEl.addEventListener('click', onClick)
inputEl.addEventListener('input', onInputChange)
function onInputChange(e) {
    e.preventDefault();
//   console.log(e.currentTarget.elements);
  countryList.textContent = e.currentTarget.value
  const input = e.currentTarget.value.trim();
  fetchCountries(input).then(() =>{
    // if ([{}].length === 0) throw new Error('no country');
    console.log(input);
    // return articles.reduce((markup,article) =>
    // createMarkup(article) + markup, '');

//   }).then(markup => {
//     console.log(markup);
  }).catch (onError)
  .finally(() => input.reset());


function createMarkup({name, capital, population, flags, languages} ){
// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages 

//   return `
//   <svg>
//   <use ${flags.svg}></use>
// </svg> 
//  <h2 class="country- title">${name}</h2>;
//  <p class="country-capital">${capital}</p>;
//  <p class="country-population">${population}</p>;
//  <p class="country-languages">${languages}</p>;`
}

   function onError(err){
    console.log(err)
  }

//    console.log(input);
//    console.log();
//    console.log('hi');
};

// fetchCountries('peru').then(console.log);


// fetchCountries.js
// fetchCountries(name)

// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов
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