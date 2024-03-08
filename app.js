document.addEventListener("DOMContentLoaded", function() {
    var lista = document.getElementById("miLista");
    var elementos = lista.getElementsByTagName("li");
  
    for (var i = 0; i < elementos.length; i++) {
      elementos[i].addEventListener("click", function() {
        var targetId = this.getAttribute("id");
        var targetElement;
  
        if (targetId === "elemento1") {
          // Si se hace clic en "Home", apunta al elemento del footer
          targetElement = document.querySelector(".presentacion");
        } 
        else if (targetId === "elemento2") {
          // Si se hace clic en "About me", apunta al elemento del section about me
          targetElement = document.querySelector(".about-me");
        }

        else if (targetId === "elemento3") {
          // Si se hace clic en "Project", apunta al elemento del section proyectos
          targetElement = document.querySelector(".proyectos");
        }
        else if (targetId === "elemento4") {
          // Si se hace clic en "Contacto", apunta al elemento del section contacto
          targetElement = document.querySelector(".contacto");
        }
  
        smoothScroll(targetElement);
      });
    }
  });

  function smoothScroll(target) {
    var targetPosition = target.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var duration = 1000; // Duración en milisegundos

    var start = null;
    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }

    // Función de aceleración
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
}