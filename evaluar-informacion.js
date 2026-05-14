function veracidadInformacion(tieneFuente, estaVerificada) {
  if (tieneFuente === false && estaVerificada === false) {
    return "La información puede compartirse con responsabilidad."
  } else {
    return "La información debe revisarse antes de compartirse."
  }
}

const resultado = veracidadInformacion(false, false)

console.log("Veracidad de la información:")
console.log(resultado)
