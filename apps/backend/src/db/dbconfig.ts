import path from "path";
import dotenv from "dotenv";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";

// Resolve .env from backend folder regardless of CWD
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
dotenv.config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("❌ DATABASE_URL is missing in your .env file");
}

// Create pg Pool instance
const pool = new Pool({ connectionString });

// Pass pool instance to PrismaPg adapter
const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });

