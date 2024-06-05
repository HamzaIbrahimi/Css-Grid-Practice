const container = document.querySelector(".container");

for (const children of container.children) {
  if (//Yes I could have easily done this in css but was testing myself!
    children.className === "image-one" ||
    children.className === "image-two" ||
    children.className === "image-three" ||
    children.className === "image-four"
  ) {

    children.style.filter = 'grayscale(100%)'
  }
}