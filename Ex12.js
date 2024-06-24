lado1 = 3;
lado2 = 3;
lado3 = 2;

if (lado1 === lado2 && lado2 === lado3) {
    console.log("Esse triângulo é EQUILÁTERO");
}
else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Esse triângulo é ISÓSCELES");
}
else {
    console.log("Esse triângulo é ESCALENO");
}