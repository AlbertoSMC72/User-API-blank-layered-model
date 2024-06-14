import z from 'zod';

const userSchema = z.object({
    name: z.string({
        invalid_type_error: "The name must be a string"
    }),
    surname: z.string({
        invalid_type_error: "The surname must be a string"
    }).optional(),
    email: z.string({
        invalid_type_error: "The email must be a string"
    }).email("Invalid email format"),
    password: z.string({
        invalid_type_error: "The password must be a string"
    }).min(6, "Password must be at least 6 characters long"),
});

export function validateUser(user) {
    return userSchema.safeParse(user);
}

export function validatePartialUser(user) {
    return userSchema.partial().safeParse(user);
}
