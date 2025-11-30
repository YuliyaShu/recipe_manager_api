import express from 'express';
// import prisma from "@/prisma/client";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');

})

// async function main() {
//     const recipes = await prisma.recipe.findMany();
//     console.log(recipes);
// }
//
// main().then(async () => {
//     await prisma.$disconnect()
// })
//     .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     });

export default app;
