import { z } from "zod";

export const userNameValidation = z
  .string()
  .min(3, "username must be 3 character")
  .max(10, "username not more than 10 character")
  .regex(/^[a-zA-Z][a-zA-Z0-9_]+$/, "username not accept special character");

export const signUpSchema = z.object({
  usrname: userNameValidation,
  email: z.string().email({ message: "enter valid email address" }),
  password: z.string().min(5, { message: "password atleast 5 character" }),
});
