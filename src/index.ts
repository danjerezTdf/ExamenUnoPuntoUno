//let vectorUno: string[] = ["N", "E", "u", "q", "U", "e", "N"];
//let vectorUno: string[] = ["N", "n"];
let vectorUno: string[] = ["P", "e", "P", "E"];

function detectarPalindromo(arregloUno: string[]): boolean {
  // invierto vector recibido y guardo en AUX
  let aux: string[] = [...arregloUno].reverse();
  //declaro variables a usar
  let resultado: boolean = true;
  let i: number = 0;
  // condicion mientras, dure el largo de array o cambie la condicion a falso se ejecuta
  while (i < arregloUno.length && resultado === true) {
    // comparo, posicion a posicion vector, y equiparo mayusculas y minuscolas
    if (arregloUno[i].toLowerCase() === aux[i].toLowerCase()) {
      i = i + 1;
      resultado = true;
    } else {
      resultado = false;
    }
  }
  return resultado;
}

console.log(`${detectarPalindromo(vectorUno)}`);
