function scope() {
  const bodyClass = document.body.classList.contains("my-timer");
  if (bodyClass === true) {
    const relogio = document.querySelector(".clock"); //é pra usar só quando for printar na tela o cronômetro rodando
    const iniciar = document.querySelector(".start");
    const pausar = document.querySelector(".stop");
    const zerar = document.querySelector(".start-over");

    iniciar.addEventListener("click", function (event) {
      console.log(" ----- Cliquei no iniciar -----");
      let data;
      // console.log("Valor de data -->", data);
      // console.log("Tipo de data -->", typeof data);
      // console.log(data instanceof Date ? "é instância" : "não é instância");
      setInterval(function () {
        data = new Date();
        console.log(data);
      }, 1000);
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
