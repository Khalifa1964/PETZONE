import 'dotnev/config'
import {z} from 'zod'

const envSchema = z.object({
    NODE_ENV: z.enum(['dev', 'production']).default('dev)'),

    PORT: z.coerce.number(),
    JWT_SECRET: Z.string()
})

const env = envSchema.parse(process.env)