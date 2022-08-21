const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */

const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const altText = "Image of something";

/* Looping through images */
for (image of images) {
  let index = images.indexOf(image);
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/${images[index]}`);
  newImage.setAttribute("alt", altText);
  thumbBar.appendChild(newImage);
  newImage.addEventListener("click", (e) => {
    displayedImage.setAttribute("src", e.target.src);
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("mouseover", (e) => {
  let code = e.target.getAttribute("class");
  if (code == "dark") {
    e.target.setAttribute("class", "light");
    e.target.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    e.target.setAttribute("class", "dark");
    e.target.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
});
