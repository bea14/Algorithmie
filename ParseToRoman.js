/*
CONSIGNE :
Créer une fonction appelé parseToRoman qui, pour un nombre donné, va retourner sa valeur en chiffres romains.
On rappelle la valeur des chiffres romains :
I=1 V=5 X=10 L=50 C=100 D=500 M=1000
on écrit les symboles du plus grand au plus petit et ils peuvent s'additionner mais si il y 4 fois la meme valeur de suite alors on utilise la notion soustractive en retranchant à la valeur supérieure 1
traiter des nombres à partir de 1 (pour l'anecdote les romains ne connaissaient pas le 0)
*/
function parseToRoman(number) {
    const decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    const romain = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    let result = ""
    for (let i = 0; i < decimal.length; i++) {
        while(number  >= decimal[i]){
            number -= decimal[i]
            result += romain[i]
        }
    }
    console.log(result)
}