import index from '../index.js';

const signUpController = (req, res) => {
    index.userServices.signUpController(req.body.res);
};

const loginController = (req, res) => {
    index.userServices.loginController(req, res);
};

const getUserController = (req, res) => {
    index.userServices.getUserController(req, res);
};

export default { signUpController, loginController, getUserController };