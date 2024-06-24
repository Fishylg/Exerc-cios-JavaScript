altura = 1.76
peso = 69
calAltura = altura * altura
imc = peso / calAltura

console.log("Seu IMC é de:", imc)
if (imc < 16.9){
    console.log("MUITO ABAIXO do peso")
}
else if (imc > 17 && imc < 18.4){
    console.log("ABAIXO do peso")
}
else if (imc > 18.5 && imc < 24.9){
    console.log("Peso NORMAL")
}
else if (imc > 25 && imc < 29.9){
    console.log("ACIMA do peso")
}
else if (imc > 30 && imc < 34.9){
    console.log("OBSIDADE GRAU 1")
}
else if (imc > 35 && imc < 40){
    console.log("OBSIDADE GRAU 2")
}
else{
    console.log("OBSIDADE GRAU 3")
}