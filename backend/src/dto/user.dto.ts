import z from 'zod';

export const addUserDto = z.object({
  name:z.string().min(1, 'Name is required'),
  email: z.string().email()
})
export const updateUserDto = z.object({
  name:z.string().optional(),
  email: z.string().email().optional()
})