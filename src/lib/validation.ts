import { z } from "zod";
import { contactPreferences, projectTimelines, projectTypes } from "../content/contact-options";

const optionalText = (max: number) => z.string().trim().max(max).optional();

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80),
  email: z.email("Please enter a valid email address."),
  company: z.string().trim().max(120).optional(),
  phone: optionalText(40),
  projectType: z.enum(projectTypes, { error: "Please select a project type." }),
  timeline: z.enum(projectTimelines, { error: "Please select a timeline." }),
  budget: optionalText(80),
  preferredContact: z.enum(contactPreferences).optional(),
  message: z.string().trim().min(20, "Please share at least 20 characters.").max(4000),
  website: z.string().max(0).optional(),
  context: optionalText(120),
  source: optionalText(80),
  landingPage: optionalText(1000),
  referrer: optionalText(1000),
  utmSource: optionalText(200),
  utmMedium: optionalText(200),
  utmCampaign: optionalText(200),
  utmContent: optionalText(200),
  utmTerm: optionalText(200),
  startedAt: z.number().int().positive(),
});

export type ContactInput = z.infer<typeof contactSchema>;
