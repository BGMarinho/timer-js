function scope() {
  const bodyClass = document.body.classList.contains("my-timer");
  if (bodyClass === true) {
    const relogio = document.querySelector(".clock");
    const iniciar = document.querySelector(".start");
    const pausar = document.querySelector(".stop");
    const zerar = document.querySelector(".start-over");

    function returnInitialTime() {
      let data = new Date("01-01-1970 00:00:00");
      return data.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
    }

    iniciar.addEventListener("click", function (event) {
      console.log(" ----- Cliquei no iniciar -----");
      let initialTime = returnInitialTime();
      console.log(initialTime);
      console.log(
        initialTime instanceof Date ? "é instância" : "não é instância"
      );
    });

    pausar.addEventListener("click", function (event) {
      console.log("Cliquei no pausar");
    });

    zerar.addEventListener("click", function (event) {
      console.log("Cliquei no zerar");
    });
  }
}
scope();
