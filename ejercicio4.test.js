//4. Calcular el Siglo

function calcularSiglo(anio){
    let siglo = Math.ceil(anio / 100);
    return siglo;
}

//Tests

test("El año 2010 corresponde al Siglo 21", () => {
    expect(calcularSiglo(2010)).toBe(21);
});

test("El año 2000 corresponde al Siglo 20", () => {
    expect(calcularSiglo(2000)).toBe(20);
});

test("El año 1985 corresponde al Siglo 20", () => {
    expect(calcularSiglo(1985)).toBe(20);
});

test("El año 1746 corresponde al Siglo 20", () => {
    expect(calcularSiglo(1746)).toBe(18);
});

test("El año 605 corresponde al Siglo 20", () => {
    expect(calcularSiglo(605)).toBe(7);
});