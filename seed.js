require("dotenv/config");
const prisma = require("./src/lib/prisma");

async function main() {
  await prisma.producto.createMany({
    data: [
      { nombre: "Laptop Gamer", fecha: new Date("2026-11-01T09:00:00") },
      { nombre: "Mouse Gamer", fecha: new Date("2026-11-01T10:00:00") },
      { nombre: "Pantalla", fecha: new Date("2026-11-01T11:00:00") },
      { nombre: "LaptopXP Gamer", fecha: new Date("2026-11-01T12:00:00") },
      { nombre: "Michi Gamer", fecha: new Date("2026-11-01T13:00:00") },
    ],
  });

  await prisma.categoria.createMany({
    data: [
      { nombre: "Laptops", descripcion: "Equipos portátiles gaming" },
      { nombre: "Periféricos", descripcion: "Mouse, teclados y headsets" },
      { nombre: "Monitores", descripcion: "Pantallas de alta frecuencia" },
      { nombre: "Consolas", descripcion: "Consolas de sobremesa y portátiles" },
      { nombre: "Accesorios", descripcion: "Sillas, alfombrillas y soportes" },
    ],
  });

  await prisma.cliente.createMany({
    data: [
      { nombre: "Carlos Ruiz", correo: "carlos@mail.com", telefono: "999111222" },
      { nombre: "Ana Torres", correo: "ana@mail.com", telefono: "999333444" },
      { nombre: "Luis Gómez", correo: "luis@mail.com", telefono: "999555666" },
      { nombre: "Sofía Díaz", correo: "sofia@mail.com", telefono: "999777888" },
      { nombre: "Mateo Silva", correo: "mateo@mail.com", telefono: "999000111" },
    ],
  });

  await prisma.proveedor.createMany({
    data: [
      { empresa: "TechGlobal", pais: "EE.UU.", contacto: "ventas@techglobal.com" },
      { empresa: "AndesHardware", pais: "Perú", contacto: "info@andeshw.pe" },
      { empresa: "NipponGaming", pais: "Japón", contacto: "export@nippongame.jp" },
      { empresa: "EuroComponentes", pais: "Alemania", contacto: "contact@eurocomp.de" },
      { empresa: "LatamDistri", pais: "Chile", contacto: "soporte@latamdistri.cl" },
    ],
  });

  await prisma.pedido.createMany({
    data: [
      { codigo: "PED-001", total: 3500.50, estado: "Entregado" },
      { codigo: "PED-002", total: 180.00, estado: "Enviado" },
      { codigo: "PED-003", total: 890.90, estado: "Pendiente" },
      { codigo: "PED-004", total: 4200.00, estado: "Entregado" },
      { codigo: "PED-005", total: 250.00, estado: "Procesando" },
    ],
  });

  await prisma.resena.createMany({
    data: [
      { autor: "Carlos Ruiz", comentario: "Excelente rendimiento en juegos", estrellas: 5 },
      { autor: "Ana Torres", comentario: "Muy cómodo y preciso", estrellas: 5 },
      { autor: "Luis Gómez", comentario: "Buenos colores y fluidez", estrellas: 4 },
      { autor: "Sofía Díaz", comentario: "Llegó rápido y bien embalado", estrellas: 5 },
      { autor: "Mateo Silva", comentario: "Calidad precio recomendable", estrellas: 4 },
    ],
  });

  console.log("Tablas pobladas correctamente");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());