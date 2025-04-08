//ejercicicio 1 productos de tienda
function precioproducto(nombre){
  let productos = [
      ["laptop", 1200],
      ["celular", 850],
      ["memoria", 160]
  ]

  let precio = productos.filter((producto) => producto[0] == nombre )
  console.log("el presio es: " + precio[0][1])

}
precioproducto("celular")

  //calcular el total
  function calcularTotal(hola) {
    let productos = [
      ["laptops", 1200],
      ["celulares", 850],
      ["memorias", 160]
    ]
  
    let total = 0
  
    hola.forEach(nombre => {
      productos.forEach(producto => {
        if (producto[0] === nombre) {
          total += producto[1]
        }
      })
    })
  
    console.log("El total es " + total)
  }
  calcularTotal(["laptops", "celulares", "memorias"])

  //aplicacion del descuento
  function aplicarDescuento(nombre, descuento) {
    let productos = [
      ["laptops", 1200],
      ["celulares", 850],
      ["memorias", 160]
    ]
  
    let precioConDescuento = 0
  
    productos.forEach(producto => {
      if (producto[0] === nombre) {
        precioConDescuento = producto[1] - (producto[1] * descuento / 100)
      }
    })
  
    console.log("Precio con descuento: " + precioConDescuento)
  }
  aplicarDescuento("laptops", 50)


  //vamos a eliminar el producto
  function eliminarProducto(nombre) {
    let productos = [
      ["laptops", 1200],
      ["celulares", 850],
      ["memorias", 160]
    ]
  
    let nuevos = []
  
    productos.forEach(producto => {
      if (producto[0] !== nombre) {
        nuevos.push(producto)
      }
    })
  
    console.log("Productos después de quitar:", nuevos);
  }
  eliminarProducto("memorias")

  //agregar productos
  function agregarProducto(nombre, precio) {
    let productos = [
      ["laptops", 1200],
      ["celulares", 850],
      ["memorias", 160]
    ]
  
    productos.push([nombre, precio])
    console.log("Lista con los nuevos productos:", productos)
  }
  agregarProducto("swichs", 970)

  //busqueda de productos
  function buscarProducto(nombre) {
    let productos = [
      ["laptops", 1200],
      ["celulares", 850],
      ["memorias", 160]
    ]
  
    let encontrado = productos.find(p => p[0] === nombre)
    console.log("Producto encontrado:", encontrado)
  }
  buscarProducto("celulares")
  


  //ejercicio 2 dias de la semana
  function servicios(dia) {
    let encargado = [
      ["lunes", "Lichis"],
      ["martes", "Jose"],
      ["miércoles", "Danna"],
      ["jueves", "alan"],
      ["viernes", "vale"]
    ]
  
    let persona = "No hay servicio :("
  
    encargado.forEach(turno => {
      if (turno[0] === dia) {
        persona = "Este día se encarga " + turno[1]
      }
    })
  
    console.log(persona)
  }
  servicios("viernes")

  
//función recursiva que calcule el factorial de un número.
function factoriales(numero) {
    let resultado = 1
    for (let i = 1; i <= numero; i++) {
      resultado *= i
    }
    console.log("El factorial del " + numero + " es: " + resultado)
  }
  factoriales(10)

  //función recursiva que calcule el n número de Fibonacci
  function fibonacchi(num) {
    let a = 0
    let b = 1
    let timp
  
    for (let i = 0; i < num; i++) {
      timp = a
      a = b
      b = timp + b
    }
  
    console.log("el fibonacci de " + num + " es: " + a)
  }
  fibonacchi(15)


  //función recursiva que revierta una cadena de texto.
  function invertirTexto(texto) {
    let invertido = ""
  
    for (let i = texto.length - 1; i >= 0; i--) {
      invertido += texto[i]
    }
  
    console.log("Texto invertido: " + invertido)
  }
  invertirTexto("valeria de la luz soria")