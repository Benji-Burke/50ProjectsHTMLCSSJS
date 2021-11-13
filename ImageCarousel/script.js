//elements to grab
const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

//Get each individual image..node list
//fetch by selecting all and inside the images container, each image
const img = document.querySelectorAll("#imgs img");
console.log(img);
//set index for where we are at with the images
//let to reassign it
let idx = 0;

//want internval to keep running, that takes a function with how often we want it to run
let interval = setInterval(run, 3000);

//increase the index by 1
function run() {
  idx++;

  changeImage();
}

//change the image by changing the translate value
//check the list if its at the end of the node list
//in this case 4 pics means node list at 3
//if index greater than the node list set to 0
function changeImage() {
  //are we at the end of the node list?
  if (idx > img.length - 1) {
    console.log("end of the list");
    idx = 0;
    //are we at the beginning of the node list?
  } else if (idx < 0) {
    console.log("hitting here");
    idx = img.length - 1;
  }

  console.log(idx);
  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 3000);
}

rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});
