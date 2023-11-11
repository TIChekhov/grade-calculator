import { PrismaClient } from "@prisma/client";

export async function getClient() {
  const client = new PrismaClient();
  client.$connect();
  return client;
}
