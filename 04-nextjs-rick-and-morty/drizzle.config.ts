import { type Config } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.development.local",
});

if (!process.env.POSTGRES_URL) {
  throw new Error("Missing POSTGRES_URL env var");
}

export default {
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL,
  },
} satisfies Config;
