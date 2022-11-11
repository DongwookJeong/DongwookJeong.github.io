const imgs = [
  "./images/ghibli.jpg",
  "./images/ghibli2.jpg",
  "./images/ghibli3.jpg",
];
let imgThing = imgs[Math.floor(Math.random() * 3)];

function moreElement(babyImg) {
  return imgThing === "./images/ghibli.jpg"
    ? (babyImg = "./images/page.png")
    : imgThing === "./images/ghibli2.jpg"
    ? (babyImg = "./images/page2.png")
    : imgThing === "./images/ghibli3.jpg"
    ? (babyImg = "./images/page3.png")
    : console.error();
}

export { moreElement, imgThing };
// console.log(imgThing);
// console.log(moreElement());
