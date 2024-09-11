//2. Volúmen de un Tanque de Agua

function calcularVolumen(diametro, altura, enMetros){
    if(enMetros == false){
        diametro = diametro /100;
        altura = altura /100;
    }
    let radio = diametro/2;
    let volumenM3 = Math.PI*Math.pow(radio,2)*altura;
    let volumenLitros = (volumenM3*1000).toFixed(2);
    return parseFloat(volumenLitros);
}

//Tests

test("Volumen en litros de un tanque de 1,2 metros de diámetro y 1 metro de altura", () => {
    expect(calcularVolumen(1.2, 1, true)).toBe(1130.97);
});

test("Volumen en litros de un tanque de 3 metros de diámetro y 3 metros de altura", () => {
    expect(calcularVolumen(3, 3, true)).toBe(21205.75);
});

test("Volumen en litros de un tanque de 120 centímetros de diámetro y 100 centímetros de altura", () => {
    expect(calcularVolumen(120, 100, false)).toBe(1130.97);
});

test("Volumen en litros de un tanque de 300 centímetros de diámetro y 300 centímetros de altura", () => {
    expect(calcularVolumen(300, 300, false)).toBe(21205.75);
});

test("Volumen en litros de un tanque de 200 centímetros de diámetro y 500 centímetros de altura", () => {
    expect(calcularVolumen(200, 500, false)).toBe(15707.96);
});

