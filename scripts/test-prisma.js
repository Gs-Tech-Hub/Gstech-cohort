const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const app = await prisma.application.create({
    data: {
      name: 'Test User',
      email: 'test@example.com',
      role: 'Tester',
      message: 'This is a test submission from script',
    },
  })
  console.log('Created application id=', app.id)
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
