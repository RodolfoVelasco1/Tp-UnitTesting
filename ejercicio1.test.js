//1. Validar código PIN

function validarPin(pin){
    if(pin.length != 4 && pin.length != 6){
        return false;
    } else {
        const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let encontrado = 0;
        for(let i = 0; i < pin.length; i++){
            for (let j = 0; j < numeros.length; j++){
                if (pin[i] == numeros[j]){
                    encontrado++
                    break;
                }
            }
        }
        if(encontrado == pin.length){
            return true;
        } else {
            return false;
        }
    }
}

//Tests

test("Pin de 4 dígitos: Debería devolver true", () => {
    expect(validarPin('2468')).toBe(true);
});

test("Pin de 6 dígitos: Debería devolver true", () => {
    expect(validarPin('654321')).toBe(true);
});

test("Pin de 3 dígitos: Debería devolver false", () => {
    expect(validarPin('159')).toBe(false);
});

test("Pin contiene letras: Debería devolver false", () => {
    expect(validarPin('12r7')).toBe(false);
});