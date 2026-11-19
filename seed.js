require("dotenv/config");
const prisma = require("/src/libreria/prisma")

async function main() {
    await pirisma.producto.createMany({
        data: [
            { nombre: "Laptop Gamer", fecha: new Date("2026-11-01T09:00:00")},
            { nombre: "Mouse Gamer", fecha: new Date("2026-11-01T010:00:00")},
            { nombre: "Pantalla", fecha: new Date("2026-11-01T11:00:00")},
            { nombre: "LaptopXP Gamer", fecha: new Date("2026-11-01T12:00:00")},
            { nombre: "Michi Gamer", fecha: new Date("2026-11-01T13:00:00")},
    ],
});
console.log("Poductos insertados correctamente");
}

main()
.catch((e) => {console.error(e); process.exit(1);})
.finally(() => prisma.$disconnect());


