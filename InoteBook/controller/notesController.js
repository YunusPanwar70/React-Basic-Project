import index from '../index';

const getAllNotesController = (req, res) => {
    index.notesServices.getAllNotesController(req, res);
};

const addNotesController = (req, res) => {
    index.notesServices.addNotesController(req, res);
};
const updateNotesController = (req, res) => {
    index.notesServices.updateNotesController(req, res);
};

const deleteNotesController = (req, res) => {
    index.notesServices.deleteNotesController(req, res);
};

export default {
    getAllNotesController,
    addNotesController,
    updateNotesController,
    deleteNotesController
};