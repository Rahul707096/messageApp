import { z } from "zod";

export const verifySchema = z.object({
  code: z.string().length(6, { message: "verify code atleast 6 digit" }),
});
