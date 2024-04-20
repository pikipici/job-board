import { PrismaClient } from "@prisma/client";

const prismaClientSingLeton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingLeton>;
}

const prisma = globalThis.prisma ?? prismaClientSingLeton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
