/**
 * where I will load my API and pass it my models via controller
 */

async function fetchChuck() {
    
    const api = 'https://api.chucknorris.io/jokes/random';
    const response = await fetch(`${api}`);
    const data = await response.json();

    if (!response) {
        throw new Error("something whent really wrong");
    }
    console.log(data.value);
    
    return data.value
}


export { fetchChuck };