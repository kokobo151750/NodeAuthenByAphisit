import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('Authentication', 'postgres', '18910797', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});