import fetchCategoryChuck from '../service/api.js';
import fetchRandomChuck from '../service/api.js';
import searchChuck from '../service/api.js';



async function getChuck () {
    let data = await fetchRandomChuck();
    //console.log('welcome'); 
    console.log(data.value + ' //// random chuck');    
}

async function catChuck(category) {
    let data = await fetchCategoryChuck(category);
    console.log(category);
    console.log(data.value + ' ////// category');
    
}

async function search(terms) {
    let data = await searchChuck(terms)
    console.log(terms);
    console.log(data.value + ' ////// terms');
}





export default getChuck;
export { catChuck, search };