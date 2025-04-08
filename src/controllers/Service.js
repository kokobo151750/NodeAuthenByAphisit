export default {
    getToken: (req) => {
        return req.headers.authorization.replace('Bearer ', '');
    },
}