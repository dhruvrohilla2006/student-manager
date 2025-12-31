import * as z from 'zod'

export const registerValidator = z.object({
    name:z.string().toLowerCase(),
    email:z.email(),
    password:z.string().min(8).max(12),
    role:z.enum(["student","teacher"]),
    course:z.enum(["BCA"])

})

export const loginValidator = z.object({
    email:z.email(),
    password:z.string().min(8).max(12)
})