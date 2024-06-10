"use server";

import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { registerUser } from "./services/user";
import { DatabaseError } from "pg";
import { DatabaseErrorType } from "./const/types";

export const loginAction = async (formData: FormData) => {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
};

export const registerAction = async (formData: FormData) => {
  try {
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    console.log(name, email, password);
    await registerUser(name, email, password);
  } catch (e) {
    const dbError = e as DatabaseError;

    let errorType: DatabaseErrorType;
    if (dbError.message === "Email already registered 23505")
      errorType = "UniqueConstraintViolation";
    else if (dbError.message === "Error registering the user")
      errorType = "ConnectionError";
    else errorType = "GeneralError";

    return errorType;
  }

  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
};
