/*8. La velocidad se calcula dividiendo la distancia total recorrida por un objeto en movimiento 
entre el tiempo total empleado. Escribe una función que calcule la velocidad de un objeto 
en movimiento*/

function Velocidad(Distancia, Tiempo) {
  return console.log(
    `La velocidad del objeto es igual a: ${Distancia / Tiempo}Km/H`
  );
}

Velocidad(400, 20);
