function convertToRot13(stringToTransform) {
    //on enlève les '' et on transforme en minuscules
    const newString = stringToTransform.toLowerCase()
    // pour chaque caractère, on le transforme en son code ascii et ensuite on ajoute ou enlève 13
    //on retransforme ensuite en lettre arabe
    for (let i = 0; i < newString.length; i++) {
        let code = newString.charCodeAt(i)
        if (code < 65 || code > 90) {
            result += String.fromCharCode(code)
        } else if (code < 78) {
            result += String.fromCharCode(code+13)
        } else result += String.fromCharCode(code-13)
    }
    return result
}
