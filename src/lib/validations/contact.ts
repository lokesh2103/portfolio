import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string()
    .email("Please enter a valid email address"),
  organization: z.string()
    .max(100, "Organization name must be less than 100 characters")
    .optional(),
  subject: z.enum(["collaboration", "opportunity", "general"], {
    required_error: "Please select a subject",
  }),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;