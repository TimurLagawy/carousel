let items = document.querySelectorAll(".item");
let currentItem = 0;
let isEnaibled = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnaibled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener("animationend", function () {
    this.classList.remove("active", direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add("next", direction);
  items[currentItem].addEventListener("animationend", function () {
    this.classList.remove("next", direction);
    this.classList.add("active");
    isEnaibled = true;
  });
}

function previosItem(n) {
  hideItem("to-left");
  changeCurrentItem(n + 1);
  showItem("from-right");
}
function nextItem(n) {
  hideItem("to-right");
  changeCurrentItem(n - 1);
  showItem("from-left");
}
document.querySelector(".control.left").addEventListener("click", function () {
  if (isEnaibled) {
    previosItem(currentItem);
  }
});

document.querySelector(".control.right").addEventListener("click", function () {
  if (isEnaibled) {
    nextItem(currentItem);
  }
});
