// import { PrismaClient } from '@prisma/client'
import express, { Router } from 'express'
import App from './main/app'
// const prisma = new PrismaClient()

const app = express()
const router = Router()

async function main() {
  const server = new App(app, router)
  server.run()
}

main()
  .catch((e) => console.error(e))
  // .finally(async () => await prisma.$disconnect())
