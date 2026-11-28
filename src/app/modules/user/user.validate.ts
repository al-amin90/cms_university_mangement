import z from 'zod'
import { UserStatus } from './user.constant'

export const userZodSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password cant not be more than 20' }),
})

export const changeStatusValidationSchema = z.object({
  body: z.object({
    status: z.enum([...UserStatus] as [string]),
  }),
})
