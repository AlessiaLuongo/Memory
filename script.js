const immagini = [
  "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTgu4bpEseN4Klo6Q1zRvNS2DAXByTK3DbGHCuubY7jmIwYG3AI",

  "https://ondarock.it/images/monografie/PanteraGrande673x348_1626699783.jpg",

  "https://m.media-amazon.com/images/I/91Q9pLnASzL._AC_UF10001000_QL80_.jpg",

  "https://jamtv.it/wp-content/uploads/2022/05/david-bowie-tutti-gli-album-libro.jpg",

  "https://freezine.it/wp-content/uploads/2018/02/metallica.jpg",

  "https://www.emp-online.it/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw8cdb61ac/images/3/6/3/2/363257a-emp.jpg?sfrm=png",

  "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2010/2/17/1266424365020/black-sabbath-rock-band-001.jpg?width=465&dpr=1&s=none",

  "https://media-assets.vanityfair.it/photos/6461f97ac8b926063a87b3e9/4:3/w_1468,h_1101,c_limit/Tokio%20Hotel.png",
];

const quadrato = document.getElementById("quadrato");

let flippedCards = [];
let punteggio = document.getElementById("punteggio");
punteggio.innerHTML = 0;
function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5);
}

const creaGriglia = () => {
  shuffleArray(immagini);
  for (let index = 0; index < 16; index++) {
    const quadratino = document.createElement("div");
    quadratino.classList.add("quadratino-item");

    const img = document.createElement("img");
    img.src = immagini[index % immagini.length];
    img.classList.add("image");
    quadratino.appendChild(img);

    quadratino.addEventListener("click", () => {
      flipCard(quadratino);
    });

    quadrato.appendChild(quadratino);
  }
};

creaGriglia();

function flipCard(quadratino) {
  if (!quadratino.classList.contains("flipped") && flippedCards.length < 2) {
    quadratino.classList.add("flipped");
    flippedCards.push(quadratino);

    if (flippedCards.length === 2) {
      checkCards();
    }
  }
}

function youWin() {
  const popup = document.getElementById("pop-up");
  const iframe = document.getElementById("i-frame");

  popup.style.display = "flex";
  iframe.style.display = "block";

  iframe.src = "https://www.youtube.com/embed/c2TQNWzKJ0I?autoplay=1";
}

function checkCards() {
  const [card1, card2] = flippedCards;
  const img1 = card1.querySelector("img").src;
  const img2 = card2.querySelector("img").src;

  if (img1 === img2) {
    let currentScore = parseInt(punteggio.innerHTML);
    currentScore += 1;
    punteggio.innerHTML = currentScore;
    flippedCards = [];
    if (currentScore === 8) {
      youWin();
    }
  } else {
    setTimeout(() => {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      flippedCards = [];
    }, 1000);
  }
}

function tryAgainButton() {
  const button = document.getElementById("try-again-button");
  button.addEventListener("click", () => {
    location.reload();
  });
}
tryAgainButton();
