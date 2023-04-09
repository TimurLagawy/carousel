let petCards = document.querySelectorAll(".pepCard");
let currentPetCard = 0;
let isEnaible = true;

function changeCurrentPetCard(n) {
  currentPetCard = (n + petCards.length) % petCards.length;
}

document