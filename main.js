import './style.css'

////////////////////////////////////////////////////////////////////////////////////////

//! POR FAVOR DESCOMENTAR EL CODIGO PARA QUE SE EJECUTE (Quitar el /* en linea 7) y al final (Quitar el */ en linea 357)

/*  console.warn('Primer Ejercicio')

const Frutas = ['Papaya', 'Mandarina', 'Banana', 'Manzana', 'Pera', 'Patilla']
console.log(Frutas.join(' - '))

let FrutaEliminada = Frutas.pop()
console.log(`${FrutaEliminada} era la ultima fruta del array, la cual fue eliminada.`)
console.log(Frutas.join(' - '))

Frutas.push('Mango')
console.log('La ultima fruta eliminada se reemplazo por Mango')
console.log(Frutas)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Segundo Ejercicio')

const Tareas_Pendientes = ['Cenar', 'Sacar el perro', 'Volver a casa' ]
console.log(Tareas_Pendientes.join(' - '))

let TareaCompletada = Tareas_Pendientes.shift()
console.log(`${TareaCompletada} era la Primera Tarea Pendiente, la cual ya es considerada como TAREA COMPLETADA`)
console.log(Tareas_Pendientes.join(' - '))

Tareas_Pendientes.unshift('Ir al Gimnasio')
console.log('La primera tarea pendiente que se completó, se reemplazó por Ir al Gimnasio')
console.log(Tareas_Pendientes)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Tercer Ejercicio')

const Clientes = ['Martina', 'Luis', 'Valeria', 'David', 'Valentina', 'Armando']
console.log(Clientes.join(' - '))

Clientes.push('Kevin', 'Natalia')
console.log('Han llegado 2 nuevos clientes a la fila:')
console.log(Clientes.join(' - '))

let Primer_Cliente_Atendido = Clientes.shift()
console.log(`${Primer_Cliente_Atendido} llegó de primero a la fila y fue la primer cliente en atender`)
console.log(Clientes)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Cuarto Ejercicio')

const Numeros = [1, 2, 3, 4, 5]
console.log(`Posicion original : ${Numeros.join(' - ')}`)

let ultimoNumero = Numeros.pop()
Numeros.unshift(ultimoNumero)
console.log(`Primera Rotación : ${Numeros.join(' - ')}`)

ultimoNumero = Numeros.pop()
Numeros.unshift(ultimoNumero)
console.log(`Segunda Rotación : ${Numeros.join(' - ')}`)

ultimoNumero = Numeros.pop()
Numeros.unshift(ultimoNumero)
console.log(`Tercera Rotación : ${Numeros.join(' - ')}`)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Quinto Ejercicio')

const Carrito = []

alert('Escoge 3 productos de compra de tu preferencia y escríbelos a continuación para que lo agreges al carrito :')

let PrimerProducto = prompt('Ingresa tu Primer producto de compra')
let SegundoProducto = prompt('Ingresa tu Segundo producto de compra')
let TercerProducto = prompt('Ingresa tu Tercer producto de compra')

Carrito.push(PrimerProducto)
Carrito.push(SegundoProducto)
Carrito.push(TercerProducto)

console.log(` Haz agregado los siguentes productos a tu Carrito de compras : ${Carrito.join(' - ')}`)

let EliminarUltimoProducto;

do {
  EliminarUltimoProducto = prompt('¿Deseas eliminar el último Producto de tu Carrito de compras? Si quieres hacerlo escribe la palabra SI, caso contrario escribe NO');
  if (EliminarUltimoProducto === 'SI') {
    Carrito.pop();
    console.log(`Haz eliminado el último Producto de tu Carrito de compras, ahora solo tienes estos 2 : ${Carrito.join(' - ')}`);
  } else if (EliminarUltimoProducto === 'NO') {
    console.log(`No eliminaste el último Producto de compras de tu Carrito, tienes los 3 Productos elegidos inicialmete: ${Carrito.join(' - ')}`);
  } else {
    console.log('Escribiste una palabra diferente a las indicadas, por favor escribir las palabras "SI" O "NO" para confirmar si deseas o no eliminar el ultimo Producto de tu Carrito');
  }
} while (EliminarUltimoProducto !== 'SI' && EliminarUltimoProducto !== 'NO');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Sexto Ejercicio')

const Valores = [6, 7, 8, 9, 10]

console.log('Array Original de Valores:')
console.log(Valores)


const ValoresDobles = Valores.map( valor => valor * 2)

console.log('Array Original de Valores, Doblados o multiplicados X 2:')
console.log(ValoresDobles)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Septimo Ejercicio')

const nombres = ['kevin', 'bryan', 'oscar', 'sofia', 'camila', 'antonella']
console.log('Lista de nombres en minúscula:')
console.log(nombres)

const NOMBRES = nombres.map(nombre => nombre.toUpperCase())
console.log('Lista de NOMBRES en MAYÚSCULA:')
console.log(NOMBRES)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Octavo Ejercicio')

const Precios_Sin_IVA = [25, 34, 79, 94, 128, 86]
console.log('Estos son los precios en Dolares de los Productos, sin aplicarle el IVA:')
console.log(Precios_Sin_IVA)

const Precios_Con_IVA = Precios_Sin_IVA.map(precio => precio * 1.21)

console.log('Estos son los precios en Dolares de los Productos, después de aplicarle el IVA:')
console.log(Precios_Con_IVA)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Noveno Ejercicio')

const Numeros_1al10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('Estos son los numeros del 1 al 10 :')
console.log(Numeros_1al10)

const Numeros_1al10_Elevados_Al_Cuadrado = Numeros_1al10.map(numero => numero ** 2)

console.log('Estos son los numeros del 1 al 10, elevados al Cuadrado :')
console.log(Numeros_1al10_Elevados_Al_Cuadrado)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Decimo Ejercicio')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
console.log('Lista de numeros del 1 al 30 :')
console.log(numbers)

const numbers_Pares = numbers.filter((number) => {
  if (number % 2 === 0) {
    return number
  } 
})

console.log('Lista de numeros Pares del 1 al 30 :')
console.log(numbers_Pares)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Decimo Primer Ejercicio')

const palabras = ['amor', 'mundo', 'carro', 'parangaricutimiricuaro', 'esternocleidomastuideo', 'cinematografia'];

console.log('Lista de palabras :')
console.log(palabras)

const palabrasLargas = palabras.filter((palabra) => {
 if (palabra.length > 5) {
    return palabra
  } 
})

console.log('Lista de palabras Largas con más de 5 letras:')
console.log(palabrasLargas)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Decimo Segundo Ejercicio')

const Products = [
  
  {
    nombre:'Cama', 
    precio: 700
  },

  {
    nombre:'Sofa', 
    precio: 545
  },

  {
    nombre:'Nevera', 
    precio: 600
  },

  {
    nombre:'Televisor', 
    precio: 500
  },

  {
    nombre:'Lavadora', 
    precio: 530
  }, 

  {
    nombre:'Sofa(Oferta)', 
    precio: 425
  }, 

  {
    nombre:'Nevera(Oferta)', 
    precio: 490
  },

  {
    nombre:'Televisor(Oferta)', 
    precio: 435
  }

]

console.log('Productos disponibles para comprar:')
console.log(Products)

const Products_Oferta = Products.filter(product => product.precio < 500)

console.log('Productos en Oferta disponibles para comprar:')
console.log(Products_Oferta)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Decimo Tercer Ejercicio')

const Estudiantes = [{nombre:'Meliza', nota: 6.4}, {nombre:'Margarita', nota: 8.2},{nombre:'Julio', nota: 9},{nombre:'Sergio', nota: 6},{nombre:'Jhon', nota: 7.5}]

console.log('Esta es la lista de estudiantes cursando el Primer Semestre de la Univiersidad:')
console.log(Estudiantes)

const Estudiantes_Aprobados = Estudiantes.filter(estudiante => estudiante.nota >= 7)

console.log('Esta es la lista de estudiantes que Aprobaron exitosamente el Primer Semestre de la Univiersidad:')
console.log(Estudiantes_Aprobados)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Decimo Cuarto Ejercicio')

const Tareas = [
  {
    descripcion:'Ir al Gym', 
    completada:'SI'
  },

  {
    descripcion:'Ir al Super', 
    completada:'SI'
  },

  {
    descripcion:'Regresar a la Casa', 
    completada:'SI'
  },

  {
    descripcion:'Preparar la Cena', 
    completada:'SI'
  },

  {
    descripcion:'Preparar la ropa de la Oficina para el dia siguiente', 
    completada:'NO'
  },

  {
    descripcion:'Dormir', 
    completada:'NO'
  }
]

console.log('Todas mis Tareas:')
console.log(Tareas)

const Tareas_Completadas = Tareas.filter((tarea)=> {
  return tarea.completada === 'SI'
})

console.log('Tareas que se completaron:')
console.log(Tareas_Completadas)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Decimo Quinto Ejercicio')

const names = ["Jeremias", "Mateo", "Jesus", "Maria", "Pedro"];

console.log('A continuación se muestran por consola cada uno de los elementos del array names, iterados por un forEach:')
names.forEach(name => console.log(name))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Decimo Sexto Ejercicio')

const Edades = [74, 32, 25, 87, 61, 49, 18, 7, 3, 12]

console.log('A continuación se muestran la lista de las Edades, del Array Edades:')
console.log(Edades)

let SumaEdades = 0;

Edades.forEach(Edad => {
  SumaEdades += Edad;
})

console.log(`La suma de las Edades es: ${SumaEdades} años`);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Decimo Septimo Ejercicio')

const pro =  [{nombre:'Impresora', precio: 160}, {nombre:'Cartuchera', precio: 25}, {nombre:'Maletin', precio: 80}]

pro.forEach((producto)=> {
  producto.precio *= 0.9
})

console.log('Estos son los productos disponibles que tenemos, aplicándoles un descuento del 10% :')
console.log(pro)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Decimo Octavo Ejercicio')

const Invitados = ["Omar", "Luis", "Esteban", "Rosa", "Flor", "Linda"]
console.log("Lista de Invitados:")
console.log(Invitados)

console.log("Enviar invitación a cada uno de los invitados:")

Invitados.forEach((nombre_invitado)=> {
  console.log(`Invitación enviada a ${nombre_invitado}`)
})

console.log("Tarea terminada: se mandaron todas las invitaciones satisfactoriamente (= ")  */

 //! POR FAVOR DESCOMENTAR EL CODIGO PARA QUE SE EJECUTE (Quitar el */ en linea 357)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

