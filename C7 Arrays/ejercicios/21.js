function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  const mesespedidos = ["enero", "marzo", "noviembre"];
  const resultado = [];

  for (let i = 0; i < array.length; i++) {
    if (mesespedidos.includes(array[i])) {
      resultado.push(array[i]);
    }
  }
  if (resultado.length === mesespedidos.length) {
    return resultado;
  } else {
    return "no se encontraron los meses pedidos";
  }
}

module.exports = mesesDelAño;
