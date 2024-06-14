import { getUsersService, getUserService, createUserService, updateUserService, deleteUserService } from '../services/users.service.js';

export const getUsersController = async (req, res) => {
    getUsersService()
        .then((users) => res.status(200).json(users))
        .catch((error) => res.status(500).send(error.message));
};

export const getUserController = async (req, res) => {
    const { name } = req.params;
    getUserService(name)
        .then((user) => res.status(200).json(user))
        .catch((error) => res.status(500).send(error.message));
};

export const postUserController = async (req, res) => {
    const user = req.body;
    createUserService(user)
        .then((user) => res.status(200).json(user))
        .catch((error) => res.status(500).send(error.message));
};

export const putUserController = async (req, res) => {
    const { email } = req.params;
    const user = req.body;
    updateUserService(user, email)
        .then((user) => res.status(200).json(user))
        .catch((error) => res.status(500).send(error.message));
};

export const deleteUserController = async (req, res) => {
    const { email } = req.params;
    deleteUserService(email)
        .then((user) => res.status(200).json(user))
        .catch((error) => res.status(500).send(error.message));
};
