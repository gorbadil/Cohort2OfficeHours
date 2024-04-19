const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", (event) => {
  const scroll = window.scrollY;
  if (scroll > 117) {
    navbar.classList.add("bg-white");
  }
});

const featHeader = document.querySelector("#feat-cont h2");
const featParag = document.querySelector("#feat-cont p");
const featImg = document.querySelector("#feat-cont img");
const featCont = document.querySelector("#feat-cont");

const coctailFunc = () => {
  featHeader.textContent = "Coctail";
  featParag.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporis odio pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!";
  featImg.src = "./public/images/cocktails.jpg";
};

const serviceFunc = () => {
  featHeader.textContent = "Service";
  featParag.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. ";
  featImg.src = "./public/images/service.jpg";
};

const carParkFunc = () => {
  featHeader.textContent = "Car Park";
  featParag.textContent =
    "pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum repellendus";
  featImg.src = "./public/images/otopark.jpg";
};

const liveActionsFunc = () => {
  featHeader.textContent = "Live Actions";
  featParag.textContent =
    "pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum repellendus";
  featImg.src = "./public/images/liveActions.jpg";
};

const btns = document.querySelector("#btnsDiv");

btns.addEventListener("click", (event) => {
  const btnId = event.target.id;
  switch (btnId) {
    case "coctail":
      coctailFunc();
      break;
    case "service":
      serviceFunc();
      break;
    case "carPark":
      carParkFunc();
      break;
    case "liveActions":
      liveActionsFunc();
      break;
    default:
      return;
  }
});

const gallery = document.querySelector("#gallery");
const galleryDiv = document.querySelector("#galleryDiv");
const imageArr = [
  "./public/images/cocktails.jpg",
  "./public/images/liveActions.jpg",
  "./public/images/cocktail.png",
  "./public/images/gallery1.jpeg",
];

let index = 0;

galleryDiv.addEventListener("click", (event) => {
  const id = event.target.id;
  if (id === "left") {
    index--;
    if (index < 0) {
      index = imageArr.length - 1;
    }
  } else if (id === "right") {
    index++;
    if (index >= imageArr.length) {
      index = 0;
    }
  }
  gallery.src = imageArr[index];
});
