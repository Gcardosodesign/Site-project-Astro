import { defineCollection, z } from 'astro:content';

// Este arquivo define o "formato" (schema) do seu conteúdo.
// Qualquer post novo em src/content/posts/*.md PRECISA seguir este formato.
// É esse contrato fixo que permite gerar posts (com ou sem IA) de forma consistente.
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
