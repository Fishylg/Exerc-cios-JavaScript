mesEscolhido = "fevereiro"

m28 = ["fevereiro"]
m30 = ["abril", "junho", "setembro", "novembro"]
m31 = ["janeiro", "março", "maio", "julho", "agosto", "outubro", "dezembro"]

if (m28.includes(mesEscolhido)){
    console.log("O mês de", mesEscolhido, "tem 28 dias")
}
else if (m30.includes(mesEscolhido)){
    console.log("O mês de", mesEscolhido, "tem 30 dias")
}
else if (m31.includes(mesEscolhido)){
    console.log("O mês de", mesEscolhido, "tem 31 dias")
}