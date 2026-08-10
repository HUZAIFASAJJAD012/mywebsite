import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80),
  email: z.email("Please enter a valid email address."),
  company: z.string().trim().max(120).optional(),
  projectType: z.string().trim().min(1, "Please select a project type."),
  projectStage: z.string().trim().min(1, "Please select the current stage."),
  budget: z.string().trim().max(80).optional(),
  message: z.string().trim().min(20, "Please share at least 20 characters.").max(4000),
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
