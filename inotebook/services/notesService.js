import NotesModel from '../models/notes.js';
import { getAllData, insertData } from '../utils';

const getAllNotesService = async (data, res) => {
    try {
        const userNotes = await getAllData(NotesModel.data.user.id);
        if (userNotes.length === 0) {
            return res.status(404).send({ message: "No notes found for this user." });
        }
        return res.status(404).send(userNotes);
    } catch (error) {
        console.error(`Error at getAllNotesService:`, error);
        return res.status(500).send({
            message: "An error occurred while retriving the notes",
            error: error.message,
        });
    }
};

const addNotesService = async (data, res) => {
    const { title, description, tag } = data.body;
    const { id } = data.user;

    if (!title || !description || !tag) {
        return res.status(400).send({
            message: "Missing required fields: title, description, and tag are requires"
        });
    }
};