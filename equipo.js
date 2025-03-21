//funcion normal
let arreglo = [1,2,3,4,5]
console.log(arreglo[0])
arreglo [0] = 2 

//funcion push
let array = [1,2,3]
array.push(5)
console.log(array)

//funcion pop
let array2 = [1,2,3]
array2.pop()
console.log(array2)

//funcion unishif 
let miarreglo = ["perro","gato","pajaro","vaca","elefante"]
miarreglo.unshift("cuyo")
console.log(miarreglo)

//eliminar el primer elemento shift
//let animales = ["caballo","gato","pajaro","vaca"]

const cities = ["madrid","Valencia","mexico"]
const first = cities.shift()
console.log(cities)
console.log(first)
//includes true and false
let animal = ["caballo","vaca","burro"]
console.log(animal.includes("caballo"))
console.log(animal.includes("persona"))
//indexof para encontrar la posición de la primera ocurrencia de un valor en una cadena o en un arreglo. Si el valor no se encuentra, devuelve -1
let animalis = ["caballo","vaca","burro"]
console.log(animalis.indexOf("caballo"))
console.log(animalis.indexOf("vaca"))
//for y for each indice o modificar los elementos
// foreach rrecore sin modificar el arreglo
let granja = ["caballo","vaca","burro"]
for(let i=0; i < granja.length; i++){
    console.log(granja)
}


//filter devuelve un nuevo arreglo
let palabras = ["the boos","hola","hamburguesa","haitano","globo"]
let masde5letras = palabras.filter((x)=>x.length >= 5) 
console.log(masde5letras)

//map transforma sin afectar el original
let number = [1,4,9,16]
let raiz = number.map((num)=>Math.sqrt(num))
console.log(raiz)

//reduce acumula el resultado y lo reduce
let inicioen = 1
let operacion = raiz.reduce((acumulada,acumulado)=>acumulada*acumulado,inicioen)
console.log(operacion)

//every devuelve verdadero
let numM = [6,7,8,9,10]
let positivo = numM.every(num => num > 0)
console.log(positivo)
//some true si almenos uno cumple 
let numN = [1,-2,3,4,5]
let negativo = numN.some(num => num < 0)
console.log(negativo)
//sort modifica el arreglo y ordena los elementos 
let nombre = ["alex","citla","miguel","alan"]
nombre.sort()
console.log(nombre)

//reverse invertir un arrelo
let numeros = [1,2,3,4,5]
numeros.reverse()
console.log(numeros) 
//concat concatenar los datos 
let arreglo2 = [1,2,3]
let arreglo3 = [4,5,6]
let combinado = arreglo2.concat(arreglo3)
console.log(combinado)

//puntos importantes
let nombresSalon = ["alex","cris"]
nombresSalon[0] = "danna"
console.log(nombresSalon)

//arrow functions
let negativos = numN.some((num) => num < 0)

function nombreEquis(num){
    if(num < 0){
        console.log("true")
    }
   
}