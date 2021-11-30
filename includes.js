/*CONSIGNE
Eliminer les nombres et ne garder que les lettres 
idée de résolution : 
- commencer par lire la ligne 
- faire une fonction qui détermine si la valeur lue par la fonction est une lettre ou un nombre
- mettre une condition : Si une lettre afficher la lettre et sinon ne rien afficher
H2a3m12z13a4i O45t67a78l8a -> Hamzai Otala
H12a12m12z12a12i m12o12c12hakhar -> Hamzai mochakhar
*/

function includes(string) {
    let result = ""
    let lettre = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < lettre.length; j++){
            if (string[i].includes(lettre[j]) || string[i].includes(" ")) {
                result += string[i]
            }
        }
        
        return result
    }
}