let nome = "Homem de Ferro"
let forcaxp = 5001
nivel = " "

if(forcaxp <= 1000){
   nivel = "Ferro"
}else if(forcaxp >1000 && forcaxp <=2000){
    nivel = "Bronze"
}else if(forcaxp >2000 && forcaxp <=5000){
    nivel = "Prata"
}else if(forcaxp >5000 && forcaxp <=7000){
    nivel = "Ouro"
}else if(forcaxp >7000 && forcaxp <=8000){
    nivel = "Platina"
}else if(forcaxp >8000 && forcaxp <=9000){
        nivel = "Ascendente"
}else if(forcaxp >9000 && forcaxp <=10000){
        nivel = "Imortal"
}else if(forcaxp >1000){
        nivel = "Radiante"
}    
console.log(`O Herói de nome ${nome}  está no nível de  ${nivel}` )