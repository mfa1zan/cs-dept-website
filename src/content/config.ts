import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const newsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/news" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    category: z.enum(['research', 'achievement', 'event', 'partnership', 'announcement']),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const eventsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/events" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    time: z.string(),
    endTime: z.string().optional(),
    location: z.string(),
    type: z.enum(['workshop', 'conference', 'competition', 'seminar', 'hackathon', 'meetup']),
    registrationRequired: z.boolean().default(false),
    registrationLink: z.string().url().optional(),
    image: z.string().optional(),
    organizer: z.string().optional(),
    capacity: z.number().optional(),
    // New field for society association
    society: z.enum(['cms', 'pas', 'ps', 'sports', 'egaming', 'ems', 'blood-donation']).optional(),
    // Alternative field for custom organizers
    organizingBody: z.string().optional(),
    // New fields for custom registration forms
    customFormFields: z.array(z.object({
      name: z.string(),
      label: z.string(),
      type: z.enum(['text', 'email', 'tel', 'select', 'textarea', 'number']),
      required: z.boolean().default(false),
      placeholder: z.string().optional(),
      options: z.array(z.string()).optional(), // for select fields
    })).optional(),
  }),
});

export const collections = {
  'news': newsCollection,
  'events': eventsCollection,
};
