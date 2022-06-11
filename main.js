function fibonacci(num) {
  const fib = [0, 1]; //constante con array de 2 posiciones

  //iteramos a partir del número 2 hasta el que queramos (num)
  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]; //en la posición de i sumamos los dos terminos anteriores
  }
  return fib; //lo devolvemos
}

//Creamos la lista HTML
var limite = prompt("Escribe un número y te calcularé su sucesición de Fibonacci:")
const fibSerie = fibonacci(limite);
const ul = document.getElementById("fib");

fibSerie.forEach((number) => {
  const li = document.createElement("li");
  li.innerHTML = number;
  ul.append(li);
});
