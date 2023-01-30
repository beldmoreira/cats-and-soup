import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const cats = [
    {
      name: "Bolota",
      breed: "Persian",
      friend: true,
    },
    {
      name: "Xodó",
      breed: "Maine Coon",
      friend: true,
    },
    {
      name: "Mozin",
      breed: "Burmese",
      friend: true,
    },
    {
      name: "Babe",
      breed: "Egyptian Mau",
      friend: true,
    },
    {
      name: "Pitoco",
      breed: "Japanese Bobtail",
      friend: false,
    },
    {
      name: "Pandinha",
      breed: "Norwegian Forest Cat",
      friend: false,
    },
    {
      name: "Xana",
      breed: "Cherry Blossom Shorthair",
      friend: false,
    },
    {
      name: "Neném",
      breed: "British Shorthair",
      friend: false,
    },
  ];
  cats.forEach(async (item) => {
    await prisma.cat.upsert({
      where: { name: item.name },
      update: {},
      create: item,
    });
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
