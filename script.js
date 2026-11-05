// const namaToko = document.getElementById("nama-toko");
const namaToko = document.querySelector("#nama-toko");
const list = document.querySelector(".list");
const buttonCart = document.querySelector(".btn-buy");

// document.addEventListener("mousemove", function () {
//   console.log("Bergerak");
// });

buttonCart.addEventListener("click", function () {
  alert("Berhasil menambahkan ke keranjang");
});

// format camel case klo lebih dari 2 kosakata
// namaToko.style.backgroundColor = "#d62828";
// namaToko.classList.add("header-toko");
// namaToko.classList.remove("judul-toko");
// namaToko.setAttribute("data-custom", "judul")
// namaToko.removeAttribute("class")

// const newElement = document.createElement("div");

// newElement.innerText = "Ini elemen baru dari javascript";

// list.appendChild(newElement);
