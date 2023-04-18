const hamburguer = document.getElementById("nav-btn");
const navMenu = document.getElementById("mobile-menu");
const seeMoreBtn = document.getElementById("see-more");

const closeMenu = document.querySelectorAll(".close-mobile-menu");

const speakerContainer = document.getElementById("speakers-container");

const speakers = [
  {
    name: "Dr. Cynthia Breazeal",
    description: "MIT Media Lab",
    talkAbout:
      "Designing Social Robots: The Next Generation of Intelligent Machines",
    img: "./assets/img/breazeal.png",
  },
  {
    name: "Dr. Fei-Fei Li",
    description: "Stanford University",
    talkAbout:
      "Deep Learning for Computer Vision: Challenges and Opportunities",
    img: "./assets/img/fei-fei.png",
  },
  {
    name: "Andrew Ng",
    description: "Founder of deeplearning.ai",
    talkAbout: "Advancements in Deep Learning and AI Applications",
    img: "./assets/img/ng.jpg",
  },
  {
    name: "Yoshua Bengio",
    description: "University of Montreal",
    talkAbout: "Recent Developments and Future Directions in Deep Learning",
    img: "./assets/img/bengio.jpeg",
  },
  {
    name: "Dr. Kai-Fu Lee",
    description: "Sinovation Ventures",
    talkAbout: "AI and its Impact on the Future of Work and Society",
    img: "./assets/img/lee.jpg",
  },
  {
    name: "Dr. Kate Crawford",
    description: "Microsoft Research",
    talkAbout: "The Societal Implications of AI and its Ethical Considerations",
    img: "./assets/img/crawford.jpeg",
  },
];

let speakersInner = '';

const renderSpeakers = function (num) {
    for (let i=0; i<num; i++) {
        speakersInner += `
        <div class="speaker-card">
            <img class="speaker-img" src="${speakers[i].img}" alt="${speakers[i].name + ' image'}">
            <div class="speaker-info">
                <h3 class="speaker-name lato">${speakers[i].name}</h3>
                <h4 class="speaker-description lato">${speakers[i].description}</h4>
                <div class="divisor-grey"></div>
                <p class="speaker-thematic roboto">"${speakers[i].talkAbout}"</p>
            </div>
        </div>
    `;
    }
    speakerContainer.innerHTML = speakersInner;
    speakersInner = ''
    return speakersInner
}

seeMoreBtn.addEventListener('click', function () {
    renderSpeakers(6);
    seeMoreBtn.classList.add('hide');
})

hamburguer.addEventListener("click", function (e) {
  navMenu.classList.add("show");
});

Array.from(closeMenu).forEach((button) => {
  button.addEventListener("click", function (e) {
    navMenu.classList.remove("show");
  });
});


renderSpeakers(2);