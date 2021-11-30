/*CONSIGNE 
écrire une fonction pour convertir un nombre de secondes en nombre de minutes
*/
function convertToMinutes(time) {
    let minutes = 0
    if (time === undefined){
        time = 0
    }
    minutes = Math.round(time / 60);
    secondes = time % 60;
    result = minutes + ' minutes ' + secondes + ' secondes'
}