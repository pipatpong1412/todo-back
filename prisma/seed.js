const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcryptjs')

const password = bcrypt.hashSync('123456', 10)

const todoData = [
    { title: 'Learning HTML', dueDate: new Date(), status: 'PENDING', userId: 1},
    { title: 'Learning CSS', dueDate: new Date(), status: 'PENDING', userId: 2},
    { title: 'Learning JavaScript', dueDate: new Date(), status: 'PENDING', userId: 3},
    { title: 'Learning Prisma', dueDate: new Date(), status: 'PENDING', userId: 1},
    { title: 'Learning Express', dueDate: new Date(), status: 'PENDING', userId: 2},
    { title: 'Learning BcryptJS', dueDate: new Date(), status: 'PENDING', userId: 3}
]

const userData = [
    { username: 'andy', password, email: 'andy@a.com' },
    { username: 'bobby', password, email: 'bobby@a.com' },
    { username: 'candy', password, email: 'candy@a.com' },
]

const run = async () => {
    
    await prisma.user.createMany({
        data: userData 
    })
    await prisma.todo.createMany({
        data: todoData 
    })
}

run()