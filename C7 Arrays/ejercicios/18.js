function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let Suma = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    Suma += resultadosTest[i];
  }
  const promedio = Suma / resultadosTest.length;
  return promedio;
}

module.exports = promedioResultadosTest;
