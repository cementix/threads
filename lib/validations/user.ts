import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z
    .string()
    .url()
    .min(1, { message: "Profile url must not be empty" }),
  name: z
    .string()
    .min(3, { message: "Minimum name length is 3" })
    .max(30, { message: "Maximum name length is 30" }),
  username: z
    .string()
    .min(3, { message: "Minimum username length is 3" })
    .max(30, { message: "Maximum username length is 30" }),
  bio: z
    .string()
    .min(3, { message: "Minimum bio length is 3" })
    .max(1000, { message: "Minimum bio length is 1000" }),
});
