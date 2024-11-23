import { connect } from 'mongoose';

async function creatConnection(mongoURL) {
    try {
        const connection = await connect(mongoURL);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        throw error;
    }
}
export { creatConnection };