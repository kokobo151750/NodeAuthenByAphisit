import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(bodyParser.json())

import TestConnect from './controllers/TestConnect.js';
import MemberController from './controllers/MemberController.js';

app.get('/testConnect', TestConnect.testConnect);
app.post('/member/register', MemberController.register);
app.post('/member/sigin', MemberController.sigin);
app.post('/member/info', MemberController.info);

app.listen(port, () => {
    console.log('Server start on port', port);
})