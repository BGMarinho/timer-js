function scope() {
  const bodyClass = document.body.classList.contains("my-timer");
  if (bodyClass === true) {
    const relogio = document.querySelector(".clock");
    const iniciar = document.querySelector(".start");
    const pausar = document.querySelector(".stop");
    const zerar = document.querySelector(".start-over");

    iniciar.addEventListener("click", function (event) {
      alert("Cliquei no iniciar");
    });
    pausar.addEventListener("click", function (event) {
      alert("Cliquei no pausar");
    });
    zerar.addEventListener("click", function (event) {
      alert("Cliquei no zerar");
    });
  }
}
scope();
