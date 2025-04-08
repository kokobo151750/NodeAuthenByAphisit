import { sequelize } from '../connect.js';

export default {
    testConnect: async (req, res) => {
        try {
            const results = await sequelize.authenticate();
            return res.send({ results: results, message: "Connection successfully" });
        } catch (error) {
            res.status(500).send({ message: e.message });
        }
    }
}





