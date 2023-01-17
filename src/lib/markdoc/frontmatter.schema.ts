import { z } from "zod";

const blogBase = z.object({
  draft: z.boolean().default(false),
  title: z.string({
    required_error: "Required frontmatter missing: title",
    invalid_type_error: "title must be a string",
  }),
  date: z.date({
    required_error: "Required frontmatter missing: date",
    invalid_type_error:
      "date must be written in yyyy-mm-dd format without quotes: For example, Jan 22, 2000 should be written as 2000-01-22.",
  }),
  tags: z.array(z.string()).nonempty({
    message: "At least on tag is required"
  }),
  thumbnail: z.string({
    invalid_type_error: "title must be a string",
  }).optional().default(`placeholder.jpg`).transform((val) => `${import.meta.env.BASE_URL}images/${val}`)
});

const blogMarkdown = blogBase.extend({
  description: z.optional(z.string()),
  ogImagePath: z.optional(z.string()),
  canonicalUrl: z.optional(z.string()),
});

export const blog = blogMarkdown;
