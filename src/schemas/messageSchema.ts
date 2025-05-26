import { z } from "zod";

export const meesageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "message content atleast 10 character" })
    .max(300, {message: "message content not accept more than 300 character"
    })
});
