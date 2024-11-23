const SECRET_KEY = process.env.SECRET_KEY;
const sendMessage = "Invalid Token";
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).send({ message: 'Authorization header missing or malformed' });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).send({ sendMessage });
    }

    try {
        const verifiedUser = jwt.verify(token, SECRET_KEY);
        req.user = verifiedUser;
    } catch (err) {
        return res.status(401).send({ sendMessage, error: err.message });
    }
};
export default verifyToken;