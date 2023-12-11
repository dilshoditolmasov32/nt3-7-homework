let modeBtn = document.getElementById("dark-light");
let main2 = document.querySelector(".main2");
let main3 = document.querySelector(".main3");
let main4 = document.querySelector(".main4");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  main2.classList.toggle("dark");
  main3.classList.toggle("dark");
  main4.classList.toggle("dark");
});
