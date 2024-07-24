function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  const strings = [str1, str2, str3].filter(s => s !== "");
  
  const maxlength = Math.max(...strings.map(s => s.length));
  
  let result = "";

  for (let i = 0; i < maxlength; i++) {
    for (let s of strings) {
      if (i < s.length) {
        result += s[i];
      }
    }
  }
  return result;
}

module.exports = combine;