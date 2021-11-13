//grab the elements
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

//create an event listener
jokeBtn.addEventListener("click", generateJoke);
//call the function
generateJoke();

// create the function
async function generateJoke() {
  //create the header of the payload
  const header = {
    headers: {
      Accept: "application/json",
    },
  };

  //create the response from api
  const res = await fetch("https://icanhazdadjoke.com", header);

  //create the data from the response
  const data = await res.json();
  console.log(data);

  //attach the data to the dom
  jokeEl.innerHTML = data.joke;
}
