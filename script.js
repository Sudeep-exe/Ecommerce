/// Navbar opnening and closing for media query
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

/// Image slider sproductpage

const MainImag = document.getElementById("MainImg");
const Smallimg = document.getElementsByClassName("small-img");

Smallimg[0].onclick = function () {
  MainImag.src = Smallimg[0].src;
};

Smallimg[1].onclick = function () {
  MainImag.src = Smallimg[1].src;
};

Smallimg[2].onclick = function () {
  MainImag.src = Smallimg[2].src;
};

Smallimg[3].onclick = function () {
  MainImag.src = Smallimg[3].src;
};
