let btnEnv = document.getElementById("btnEnviar");
let precioincial = document.getElementById("precioinicial");
let descuento = document.getElementById("descuento");

btnEnv.addEventListener("click", () => {
  // TU CODIGO VA AQUI, POR EJEMPLO:
  let numeroA: number = Number(precioincial.value);
  let numeroB: number = Number(descuento.value);
  let resultado: number = (numeroA * numeroB) / 100;
  console.log("10% de descuento:");
  console.log(resultado);
  //}
});
