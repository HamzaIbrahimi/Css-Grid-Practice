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

container.addEventListener('mouseover', (e) => {
  if (e.target && e.target.className.includes('image')) {
      e.target.style.transform = 'scaleX(-1)';
  }
})

container.addEventListener('mouseout', (e) => {
  if (e.target && e.target.className.includes('image')) {
    e.target.style.transform = ''
}
})

container.addEventListener('mouseover', (e) => {
  if (e.target && e.target.className === 'image-three') {
      e.target.style.transform = 'scaleX(1)';
  }
})



function randomHex () {
    let hex = '0123456789abcdef';
    let hash = '#';
    for(let i = 0; i<6; i++) {
      hash+= hex[Math.floor(Math.random() *hex.length)]
    }
    return hash;

}

container.addEventListener('mouseover', (e) => {
  
  if (e.target && !e.target.className.includes('image') &&
      !e.target.className.includes('background'))
 {
      e.target.style.background = randomHex() ;
  }
})

container.addEventListener('mouseout', (e) => {
  if (e.target && !e.target.className.includes('image')) {
      e.target.style.background = '' ;
  }
})



