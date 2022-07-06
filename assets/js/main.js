function scope() {
  const bodyClass = document.body.classList.contains("my-timer");
  if (bodyClass === true) {
    const relogio = document.querySelector(".clock"); //é pra usar só quando for printar na tela o cronômetro rodando

    function getTimeFromSeconds(segundos) {
      const data = new Date(segundos * 1000);
      return data.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "GMT", //UTC pode ser também
      });
    }

    let seconds = 0;
    let timer;

    function startTimer() {
      timer = setInterval(function () {
        seconds++;
        relogio.innerHTML = getTimeFromSeconds(seconds);
      }, 1000);
      return timer;
    }

    document.addEventListener("click", function (event) {
      const element = event.target;

      if (element.classList.contains("start")) {
        clearInterval(timer);
        startTimer();
        relogio.style.color = "black";
      }

      if (element.classList.contains("stop")) {
        clearInterval(timer);
        relogio.style.color = "red";
      }

      if (element.classList.contains("start-over")) {
        clearInterval(timer);
        relogio.innerHTML = getTimeFromSeconds(0);
        relogio.style.color = "black";
      }
    });
  }
}
scope();
