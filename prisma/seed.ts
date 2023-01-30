import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.facility.createMany({
    data: [
      { name: "Cooking Soup" },
      { name: "Chopping Carrots" },
      { name: "Cutting Cabbage" },
      { name: "Blending Juice" },
      { name: "Putting up Corn" },
      { name: "Shelling Acorns" },
      { name: "Chopping Broccoli" },
      { name: "Grilling Barbecue" },
      { name: "Squeezing Lemons" },
      { name: "Harvesting Honey" },
      { name: "Grinding Wheat" },
      { name: "Chopping Radishes" },
      { name: "Shredding Pumpkins" },
      { name: "Slicing Mushrooms" },
      { name: "Cutting Celery" },
      { name: "Chopping Lotus Root" },
    ],
  });
  await prisma.cat.createMany({
    skipDuplicates: true,
    data: [
      {
        name: "Bolota",
        breed: "Persian",
        friend: true,
        facilityId: 1,
      },
      {
        name: "Xodó",
        breed: "Maine Coon",
        friend: true,
        facilityId: 2,
      },
      {
        name: "Mozin",
        breed: "Burmese",
        friend: true,
        facilityId: 3,
      },
      {
        name: "Babe",
        breed: "Egyptian Mau",
        friend: true,
        facilityId: 4,
      },
      {
        name: "Pitoco",
        breed: "Japanese Bobtail",
        friend: false,
        facilityId: 5,
      },
      {
        name: "Pandinha",
        breed: "Norwegian Forest Cat",
        friend: false,
        facilityId: 6,
      },
      {
        name: "Xana",
        breed: "Cherry Blossom Shorthair",
        friend: false,
        facilityId: 7,
      },
      {
        name: "Neném",
        breed: "British Shorthair",
        friend: false,
        facilityId: 8,
      },
    ],
  });
  await prisma.dish.createMany({
    data: [
      {
        name: "Mushroom Juice",
        genre: "Juice",
        facilityId: 5,
      },
      {
        name: "Cabbage Soup",
        genre: "Soup",
        facilityId: 5,
      },
      {
        name: "Honey Soup",
        genre: "Soup",
        facilityId: 12,
      },
      {
        name: "Corn Stir-fry",
        genre: "Stir-fry",
        facilityId: 7,
      },

      {
        name: "Acorn Soup",
        genre: "Soup",
        facilityId: 8,
      },
      {
        name: "Radish Juice",
        genre: "Juice",
        facilityId: 14,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
