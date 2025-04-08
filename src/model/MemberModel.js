import { DataTypes } from "sequelize";
import { sequelize } from '../connect.js';

export const MemberModel = sequelize.define('member', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(30)
    },
    phone: {
        type: DataTypes.STRING(10)
    },
    usr: {
        type: DataTypes.STRING(30)
    },
    pwd: {
        type: DataTypes.STRING
    },
    level: {
        type: DataTypes.STRING(10),
        defaultValue: 'user'
    }
});
//ถ้าสร้างตารางแล้ว ควรปิด เพราะถ้าไม่ปิด มีสิทที่ข้อมูลในตารางจะหาย
//MemberModel.sync({ alter: true });