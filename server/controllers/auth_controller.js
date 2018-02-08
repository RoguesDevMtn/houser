module.exports = {
    login: (req, res) => {
        const dbInstance = req.app.get('db');
        const {username} = req.body;
        const {session} = req;
        dbInstance.read_user([username])
        .then( user => {
            session.user.username = user[0].username;
            session.user.id = user[0].user_id;
            res.status(200).send(session.user);
        })
        .catch(() => res.status(500).send());
    },

    register: (req, res) => {
        const dbInstance = req.app.get('db');
        const {username} = req.body;
        const {session} = req;
        dbInstance.create_user([username])
        .then( user => {
            session.user.username = user[0].username;
            session.user.id = user[0].user_id;
            res.status(200).send(session.user);
        })
        .catch(() => res.status(500).send());
    },

    logout: (req, res) => {
        const {session} = req;
        session.destroy();
        res.status(200).send();
    }
}