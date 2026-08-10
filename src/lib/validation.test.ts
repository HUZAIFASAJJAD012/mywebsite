import { describe, expect, it } from "vitest";
import { contactSchema } from "./validation";

const validMessage = {
  name: "Project Owner",
  email: "owner@example.com",
  company: "Example Studio",
  projectType: "New web application",
  projectStage: "Planning and design",
  budget: "$5,000–$10,000",
  message: "We need a production-ready product website and application flow.",
  website: "",
};

describe("contactSchema", () => {
  it("accepts a complete project enquiry", () => {
    expect(contactSchema.safeParse(validMessage).success).toBe(true);
  });

  it("rejects invalid email, short content and a filled honeypot", () => {
    const result = contactSchema.safeParse({ ...validMessage, email: "invalid", message: "Too short", website: "spam.example" });
    expect(result.success).toBe(false);
    if (!result.success) expect(Object.keys(result.error.flatten().fieldErrors)).toEqual(expect.arrayContaining(["email", "message", "website"]));
  });
});
