const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcryptjs')

const password = bcrypt.hashSync('123456', 10)

const todoData = [
    { title: 'Learning HTML', duedate: new Date(), status: 'DOING', userId: 1},
    { title: 'Learning CSS', duedate: new Date(), status: 'DOING', userId: 2},
    { title: 'Learning JavaScript', duedate: new Date(), status: 'DOING', userId: 3},
    { title: 'Learning Prisma', duedate: new Date(), status: 'DOING', userId: 1},
    { title: 'Learning Express', duedate: new Date(), status: 'DOING', userId: 2},
    { title: 'Learning BcryptJS', duedate: new Date(), status: 'DOING', userId: 3}
]

const userData = [
    { username: 'andy', password, email: 'andy@a.com' },
    { username: 'bobby', password, email: 'bobby@a.com' },
    { username: 'candy', password, email: 'candy@a.com' },
]

const run = async () => {
    
    await prisma.todo.createMany({
        data: todoData 
    })
}

run()