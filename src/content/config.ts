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

export const collections = { news, events };
