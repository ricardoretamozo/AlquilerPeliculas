

//funcionalidad del boton para que se mustre el menu en forma lateral cuando este menos de 700px
document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });
  document.querySelector("Menu").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });

//para mostra el conteiner que se solicite en la navegacion.
  
  function mostrar_menu(variable){

    for (let index = 1; index <= 4; index++) {
      
      document.getElementById('m'+index).style.display="none";
    }
    document.getElementById('m'+variable).style.display="block";
  }
  var f = new Date();
  if (f.getMonth() > 9) {
      var FechaActual = f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate();
  } else {
      var FechaActual = f.getFullYear() + "-0" + (f.getMonth() + 1) + "-" + f.getDate();
  }
  
  document.getElementById("fechasalida").setAttribute("min", FechaActual);
  document.getElementById("fechasalida").setAttribute("value", FechaActual);
  document.getElementById("fecharegreso").setAttribute("min", FechaActual);
  document.getElementById("fecharegreso").setAttribute("value", FechaActual);
  