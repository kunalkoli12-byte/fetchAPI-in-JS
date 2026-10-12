const URL = "https://api.chucknorris.io/jokes/random";


let getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);

    let data = await response.json() ;
    console.log(data.value);
}



let getJokes = document.querySelector("#jokes");
let joketext = document.querySelector("h1");


getJokes.addEventListener("click", async () => {
    let response = await fetch(URL);
    let data = await response.json();
        joketext.innerText = data.value;

})
