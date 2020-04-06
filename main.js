$(document).ready(function () {

  $('select').niceSelect()
  let colorName = ['Negro', 'Cafe', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Violeta', 'Gris', 'Blanco'],

    c1, c2, c3

  if (document.querySelector('.calc-resistencia')) {
    let btnCalcular = document.getElementById('btn-calcular')

    selectColor()

    btnCalcular.addEventListener('click', function () {
      console.log(c1, c2, c3)
      calcularResistencia(c1, c2, c3)
    })
  }

  if (document.querySelector('.valorcompra-container'))
    document.getElementById('btn-calcular-costos').addEventListener('click', function () {
      gananciacompra()
      totalcompra()
    })

  function selectColor() {
    console.log('Hola')
    let wrapColor1 = document.querySelector('.select-color-1 .list')
    /* Color 1 */
    wrapColor1.addEventListener('click', function () {
      setTimeout(function () {
        color1 = document.querySelector('.select-color-1 .current').textContent
        console.log(color1)
        c1 = forColors(color1)
        console.log(c1)
      }, 300)
    })
    /* Color 2 */
    let wrapColor2 = document.querySelector('.select-color-2 .list')
    wrapColor2.addEventListener('click', function () {
      setTimeout(function () {
        color2 = document.querySelector('.select-color-2 .current').textContent
        c2 = forColors(color2)
      }, 300)
    })
    /* Color 3 */
    let wrapColor3 = document.querySelector('.select-color-3 .list')
    wrapColor3.addEventListener('click', function () {
      setTimeout(function () {
        color3 = document.querySelector('.select-color-3 .current').textContent
        c3 = forColors(color3)
        console.log(c3)
      }, 300)
    })
  }

  function forColors(color) {
    for (let i = 0; i < colorName.length; i++) {
      if (color === colorName[i]) {
        color = i
        return color
      }
    }
  }

  function calcularResistencia(color1, color2, color3) {
    let number1 = "" + color1 + color2
    let number2 = "" + 1 + ("0").repeat(color3)
    resultado = number1 * number2
    document.querySelector('.resultado').innerHTML = resultado
  }

  let gananciacompra = function () {
    let compra = parseFloat(document.getElementById("valorcompra").value)
    let ganancia = parseFloat(document.getElementById("ganancia").value)
    let resultadoganancia = ganancia / 100
    let total = compra * resultadoganancia
    document.getElementById('totalganancia').value = total
    return total
  }

  let totalcompra = function () {
    let compra = parseFloat(document.getElementById("valorcompra").value)
    let iva = parseFloat(document.getElementById("totaliva").value)
    let resultdoiva = iva / 100
    let totaliva = compra * resultdoiva
    let total = compra + gananciacompra() + totaliva
    document.getElementById('totalventa').value = total
    console.log(total)
    return total
  }
})