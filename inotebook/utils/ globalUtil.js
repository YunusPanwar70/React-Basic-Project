const innserData = async (model, data) => {
    try {
        const createuser = await model.create(data);
        return createuser;
    } catch (error) {
        console.log(`Error at inserData`, error);
        throw error;
    }
};

const checkData = async (model, criteria) => {
    try {
        const isUserExists = await model.findOne({ criteria });
    } catch (error) {
        console.log(`Error at checkData`, error);
        throw error;
    }
};

const getAllData = async (model, userId) => {
    try {
        const allNotes = await model.find({ user: userId });
    } catch (error) {
        console.log(`Error at getAllData`, error);
        throw error;
    }
};
export { checkData, innserData, getAllData };