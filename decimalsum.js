/*
CONSIGNE :
You will be given N binary numbers.
Print the decimal sum of the odd numbers.
binaire = base de 2 car on a des 0 & des 1
hexadécimale = base 16 : 0 1 2 3 4 5 6 7 8 9 a b c d e f
La fonction parseInt() analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée.
i++ --> i = i+1
*/

function decimalsum() {
    let sum = 0
    const N = parseInt(readline())
    for (let i = 0; i < N; i++) {
        const S = readline(); /*constante S = ce qui est lu*/
        let numberDecimal = parseInt(S,10); /*création d'une variable pour convertir la ligne lue en nombre décimal*/
        if (numberDecimal % 2 == 0) {
            sum = sum + numberDecimal
        }
    }
    return sum
}
