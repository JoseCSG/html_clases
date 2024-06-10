import db from "@/db/index";
import { users } from "@/db/schema";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { DatabaseError } from "pg";

export const registerUser = async (
  name: string | undefined,
  email: string | undefined,
  password: string | undefined,
) => {
  if (!name || !email || !password) {
    throw new Error("Empty fields");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await db
    .insert(users)
    .values({
      name: name,
      email: email,
      password: hashedPassword,
    })
    .catch((e) => {
      const dbError = e as DatabaseError;
      if (dbError.code === "23505")
        throw new Error(`Email already registered ${dbError.code}`);
      else throw new Error(`Error registering the user ${dbError.code}`);
    });
};

export async function getUserByEmail(email: string) {
  const user = await db.select().from(users).where(eq(users.email, email));
  return user[0];
}
