const{PrismaClient} = require('../../generated/prisma');
const{PrismaNeon} = require('@prisma/adapter/Neon');

const adapter = new PrismaNeon({
    URL: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({
    adapter,
});

module.exports = prisma;
