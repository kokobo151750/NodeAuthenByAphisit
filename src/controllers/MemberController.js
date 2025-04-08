import { MemberModel } from "../model/MemberModel.js";
import jwt from 'jsonwebtoken';
import Service from './Service.js'
import 'dotenv/config';

export default {
    register: async (req, res) => {
        try {
            const results = await MemberModel.create(req.body);
            res.send({ message: 'success', results });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },
    sigin: async (req, res) => {
        try {
            const dataMember = await MemberModel.findOne({
                where: {
                    usr: req.body.username,
                    pwd: req.body.password
                }
            });

            if (!dataMember) {
                return res.status(401).send({ ErrorMessage: 'dataUser invalid' })
            }

            const payload = {
                id: dataMember.id,
                level: dataMember.level
            }

            const tokenMember = jwt.sign(payload , process.env.SECRET_KEY);

            if (tokenMember) {
                res.send({ tokenMember, message: 'success' });
            } else {
                res.status(401).send({ message: 'tokenMember not found' });
            }
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },
    info: async (req, res) => {
        try {
            if (!req.headers.authorization) {
                return res.status(401).send({ message: 'Token not found' });
            }

            const payload = jwt.verify(Service.getToken(req), process.env.SECRET_KEY);

            if (!payload) {
                return res.status(401).send({ message: 'Payload not found' });
            }

            const dataMember = await MemberModel.findByPk(payload.id, {
                attributes: ['id', 'name', 'phone'],
            })

            res.send({ dataMember, message: 'success' });
        } catch (error) {
            if (error.message === 'jwt expired') {
                res.status(404).send({ message: 'token notfound หมดอายุ' })
            } else {
                res.status(500).send({ message: error.message });
            }
        }
    }
}