import { PrismaClient, Prisma } from "@/generated/prisma-client/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
    adapter,
});

const userData: Prisma.UserCreateInput[] = [
    {
        email: 'alice@example.com',
        password: 'password',
        recipes: {
            create: []
        }
    },
    {
        email: 'bob@example.com',
        password: 'password',
        recipes: {
            create: []
        }
    },
    {
        email: 'charlie@example.com',
        password: 'password',
        recipes: {
            create: []
        }
    },
];

const recipeData: Prisma.RecipeCreateInput[] = [
    {
        title: 'Spaghetti Bolognese',
        description: 'A classic Italian pasta dish with rich meat sauce.',
    },
    {
        title: 'Pancakes',
        description: 'Fluffy pancakes served with syrup and butter.',
    },
    {
        title: 'Caesar Salad',
        description: 'Fresh romaine lettuce with Caesar dressing and croutons.',
    },
];

export async function main() {
    console.log('Seeding users...');
    for (const u of userData) {
        await prisma.user.create({ data: u });
    }

    console.log('Seeding recipes...');
    for (const r of recipeData) {
        await prisma.recipe.create({ data: r });
    }

    console.log('Seeding completed!');
}

main();
