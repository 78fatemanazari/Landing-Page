// This function is for the modal of page - more button in the hero section

const handleModal = () => {
  let modal = document.getElementById("modal");
  if (modal.classList.contains("modal-active")) {
    modal.classList.remove("modal-active");
  } else {
    modal.classList.add("modal-active");
  }
};

// This fuction is handled humberger menu at Moile Version
const handleMenu = () => document.body.classList.toggle("open_menu");
const handleBurgerMenu = () => {
  const cursor = document.getElementById("cursor");
  const menuItem = document.querySelectorAll(".menu-item");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  for (let item of menuItem) {
    item.addEventListener("mouseenter", () => {
      cursor.style.opacity = "1";
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });

    item.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0";
      cursor.style.transform = "translate(-50%, -50%) scale(0)";
    });
  }
};

// This is for cards section
const services = () => {
  const cards = [
    {
      title: "Frontend",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, tempora? Est, tempora?`,
      icon: "./statics/icons/web.svg#web",
      number: "01"
    },
    {
      title: "Backend",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, tempora? Est, tempora?`,
      icon: "./statics/icons/web.svg#web",
      number: "02"
    },
    {
      title: "Full Stack",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, tempora? Est, tempora?`,
      icon: "./statics/icons/web.svg#web",
      number: "03"
    }
  ];

  let cardHtml = "";
  for (let item of cards) {
    cardHtml += `
    <div class="services-item">
          <div class="services-item-line"></div>
          <div class="services-item-left">
            <div class="services-item-left-icon">
              <svg>
                <use href="${item.icon}"></use>
              </svg>
            </div>
            <span>${item.number}</span>
          </div>
          <div class="services-item-right">
            <span>${item.title}</span>
            <p>${item.description}</p>
          </div>
        </div>
  `;
  }

  let list = document.getElementById("servicesContainer");
  list.innerHTML = cardHtml;
};

services();

//This function is for steps of making mobile application in the page

const steps = () => {
  const cards = [
    {
      icon: "./statics/icons/web.svg#web",
      number: "01",
      title: "Expert App Development",
      paragrapgh:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima enim quo mollitia fugit accusamus modi. Id culpa magnam distinctio labore?"
    },
    {
      icon: "./statics/icons/web.svg#web",
      number: "02",
      title: "Expert App Development",
      paragrapgh:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima enim quo mollitia fugit accusamus modi. Id culpa magnam distinctio labore?"
    },
    {
      icon: "./statics/icons/web.svg#web",
      number: "03",
      title: "Expert App Development",
      paragrapgh:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima enim quo mollitia fugit accusamus modi. Id culpa magnam distinctio labore?"
    },
    {
      icon: "./statics/icons/web.svg#web",
      number: "04",
      title: "Expert App Development",
      paragrapgh:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima enim quo mollitia fugit accusamus modi. Id culpa magnam distinctio labore?"
    }
  ];


  let stepCards = "";
  for (let items of cards) {
    stepCards += `
      <div class="step-cont-item">
              <div class="step-cont-item-head">
                <div class="step-cont-item-icon-right">
                  <svg>
                     <use href="${items.icon}"></use>
                  </svg>
                </div>
                <div class="step-cont-item-icon-left">${items.number}</div>
              </div>
              <div class="step-cont-item-body">
                <h5>${items.title}</h5>
                <p>${items.paragrapgh}</p>
              </div>
            </div>
    `;
  }

  let steps = document.getElementById("steps-container");
  steps.innerHTML = stepCards;
};

steps();
