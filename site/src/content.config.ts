import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    pillar: z.enum(['Perspective', 'News', '5 in 5', 'How-To']),
    type: z.string().optional(),
    author: z.string().default('Nicky Jepson'),
    subtitle: z.string().optional(),
    excerpt: z.string(),
    order: z.number().default(0),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    lead: z.string(),
    order: z.number().default(0),
    items: z.array(z.string()),
  }),
});

const sectors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sectors' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    lead: z.string(),
    challengeTitle: z.string(),
    challenge: z.string(),
    order: z.number().default(0),
    help: z.array(z.object({ discipline: z.string(), text: z.string() })),
    tag: z.string(),
  }),
});

export const collections = { blog, services, sectors };
