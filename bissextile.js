/*CONSIGNE
Afin de jouer avec les opérateurs, et notamment l'opérateur modulo, voici un exercice assez classique : 
déterminer si une année est bissextile.
Pour rappel, une année est bissextile si elle est divisible par 4 sans être divisible par 100 ou si elle est divisible par 400
Pour second rappel, l'opérateur modulo (%) permet d'obtenir le reste d'une division. Si le reste vaut 0, 
c'est que la division est complète : if (8 % 2) { alert("8 est divisible par 2"): }.
*/
function isBissextile(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year%400 == 0)) {
        return result = "Cette année est bissextile !"
    } else  {
        return result = "Cette année n'est pas bissextile !"
    } 
}