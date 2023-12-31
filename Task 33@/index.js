const Url = "https://place.dog/300/200";

const imageArea = document.getElementById("dog-image");

const overlayElement = document.getElementById("overlay");

const loadDogImage = ({ url }) => {

  const imgElement = document.getElementById("img-element");
  imgElement.src = url;
};

const sleepTime = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });

const getRandomDog = sync () => {
  overlayElement.style.display = "flex";
  const response = await fetch(Url);
  const data = await response.json();

  loadDogImage(data[0]);
  overlayElement.style.display = "none";
};

getRandomDog();