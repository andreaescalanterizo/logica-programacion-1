
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

// este verifica si los números son iguales
if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales:", num1, num2, num3);
} else {
    let numero = [num1, num2, num3]; 
    /* de menos a mayor*/
    let menorMayor = [...numero].sort((a, b) => a - b);
    console.log("Ordenados de menor a mayor:", menorMayor);
    
    let mayorMenor = [...numero].sort((a, b) => b - a);
    console.log("Ordenados de mayor a menor:", mayorMenor);
}
