import * as z from 'zod';
export const signUpSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    age: z.number().int().positive('Age must be a positive integer'),
  });

  export type FormData = z.infer<typeof signUpSchema>;