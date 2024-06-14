import User from '../models/user.model.js';

export const getUsers = async () => {
    try {
        return await User.find().exec();
    } catch (error) {
        throw new Error(`Error fetching users: ${error.message}`);
    }
};

export const getUser = async (email) => {
    try {
        return await User.findOne({ email: email }).exec(); // Asegúrate de buscar por email correctamente
    } catch (error) {
        throw new Error(`Error fetching user with email ${email}: ${error.message}`);
    }
};

export const createUser = async (user) => {
    try {
        return await User.create(user);
    } catch (error) {
        throw new Error(`Error creating user: ${error.message}`);
    }
};

export const updateUser = async (email, user) => { 
    try {
        return await User.findOneAndUpdate({ email: email }, user, { new: true }).exec();
    } catch (error) {
        throw new Error(`Error updating user with email ${email}: ${error.message}`);
    }
};

export const deleteUser = async (email) => { 
    try {
        return await User.findOneAndDelete({ email: email }).exec();
    } catch (error) {
        throw new Error(`Error deleting user with email ${email}: ${error.message}`);
    }
};
