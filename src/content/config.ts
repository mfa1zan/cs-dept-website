import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.coerce.date(),
    category: z.string().optional(),
    featured: z.boolean().optional(),
    author: z.string().optional(),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    endTime: z.string().optional(),
    time: z.string().optional(),
    location: z.string().optional(),
    type: z.string().optional(),
    registrationRequired: z.boolean().optional(),
    organizer: z.string().optional(),
    society: z.string().optional(),
    capacity: z.number().optional(),
  }),
});

// Study Resources collection used by Decap CMS to store metadata
const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    courseId: z.string(),
    category: z.string(),
    file: z.string(), // path under /resources or public/resources
    uploadedBy: z.string().optional(),
    tags: z.array(z.string()).optional(),
    semester: z.string().optional(),
    year: z.number().optional(),
    professor: z.string().optional(),
    uploadDate: z.coerce.date().optional(),
    // When true, resource is visible to the public listing
    isVerified: z.boolean().optional(),
  }),
});

export const collections = { news, events, resources };
