//const productos = [
//  { nombre: "Polo", precio: 35 },
//  { nombre: "Gorra", precio: 20 },
//];
//let total = 0;
//for (let i = 0; i < productos.length; i++) {
//  total += productos[i].precio;
//}
//console.log("Total: " + total);

// 1. Creen un carrito con cuatro productos
const productos = [
  { nombre: "Polera", precio: 35 },
  { nombre: "Zombrero", precio: 20 },
  { nombre: "Zapatillas", precio: 120 },
  { nombre: "Mochila", precio: 80 }
];

// 2. Muestren cuántos productos hay usando length
console.log("Cantidad de productos: " + productos.length);

// 3. Muestren el primer y último producto
console.log("Primer producto:", productos[0].nombre);
console.log("Último producto:", productos[productos.length - 1].nombre);

// 4. Calculen el total usando for
let total = 0;
for (let i = 0; i < productos.length; i++) {
  total += productos[i].precio;
}
console.log("Total a pagar: " + total);
