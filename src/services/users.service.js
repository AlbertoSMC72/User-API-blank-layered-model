import { getUsers, getUser, createUser, updateUser, deleteUser } from "../repositories/users.repositories.js";
import { validateUser, validatePartialUser } from "../validations/users.validation.js";
import bcrypt from 'bcrypt';

const saltRounds = parseInt(process.env.SALT_ROUNDS_BCRYPT);

export const getUsersService = async () => {
    try {
        const users = await getUsers();
        return users[0];
    } catch (error) {
        throw error;
    }
}

export const getUserService = async (email) => {
    try {
        const user = await getUser(email);
        return user;
    }
    catch (error) {
        throw error;
    }
}

export const createUserService = async (user) => {
    try {
        const validateUserResult = validateUser(user)
        if (validateUserResult.success) {
            let { password } = user;
            password = bcrypt.hashSync(password, saltRounds);
            const userRes = await createUser({ ...user, password });
            return userRes;
        }
        else {
            throw new Error(validateUserResult.error.message)
        }
    }
    catch (error) {
        throw error;
    }
}

export const updateUserService = async (updatedUser, email) => {
    try {
        const validateUserResult = validatePartialUser(updatedUser)
        if (validateUserResult.success) {
            const user = await updateUser(updatedUser, email);
            return user;
        }
        else {
            throw new Error(validateUserResult.error.message)
        }
    }
    catch (error) {
        throw error;
    }
}

export const deleteUserService = async (email) => {
    try {
        const user = await deleteUser(email);
        return user;
    }
    catch (error) {
        throw error;
    }
}
