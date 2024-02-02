const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

async function run () {
    await prisma.$executeRawUnsafe('DROP database todo')
    await prisma.$executeRawUnsafe('CREATE database todo')
}

console.log('Reset DB')

run()