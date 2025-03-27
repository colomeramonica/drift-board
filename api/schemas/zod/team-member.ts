import { z } from 'zod';

export const TeamMemberSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  avatar: z.string().url().optional(),
});

export const ListMembersSchema = z.object({
  _id: z.string(),
  name: z.string().min(3),
  email: z.string().email(),
  avatar: z.string().url().optional(),
});
