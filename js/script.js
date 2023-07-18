const headingDisplay = [
  {
    img: "../src/img/SLIDE_01.jpg",
    textHeading: "<span>Vocal <br> </span>Recording",
    textContent: "",
  },
  {
    img: "../src/img/SLIDE_02.jpg",
    textHeading: " <span>Recording <br></span>Studio",
    textContent: "",
  },
  {
    img: "/src/img/SLIDE_01.jpg",
    textHeading: "<span>Audio <br> </span>Mastering",
    textContent: "",
  },
];

headingDisplay.forEach((item, index) => {
  header.style.backgroundImage = `
  linear-gradient(${105}deg, rgba(${10}, ${10}, ${10}, ${1}),
  rgba(${19}, ${13}, ${19}, ${0.3}),
  rgba(${0}, ${0}, ${0}, ${1})),
  url(${item.img})


`;

  header.style.transform = `scale${3}`

  headerDisplay.innerHTML = `
    <h1 class="text-white" style="font-weight: 900;">${item.textHeading}</h1>
      <p class="text-white">Get more inspiration, ideas, through classical music, musicians and more..</p>

      <button class="btn btn-b-header rounded-pill px-5 py-3 ">Read more</button>
  `;
  // console.log(item);
});
