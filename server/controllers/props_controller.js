module.exports = {
    postProperties: (req, res) => {
        const dbInstance = req.app.get('db');
        const {session} = req;
        const {property_name, description, address, city, state, zip, image_URL, loan_amount, mortgage_amount, desired_rent} = req.body;

        dbInstance.create_property([property_name, description, address, city, state, zip, image_URL, loan_amount, mortgage_amount, desired_rent, session.user.id])
        .then(() => {
            dbInstance.read_property([session.user.id])
            .then(properties => res.status(200).send(properties))
            .catch( () => res.status(500).send());
        })
        .catch(() => res.status(500).send());
    },

    getProperties: (req, res) => {
        const dbInstance = req.app.get('db');
        const {session, query} = req;
        if(query.desiredRent){
            dbInstance.filter_properties([session.user.id, query.desiredRent])
            .then(properties => res.status(200).send(properties))
            .catch( () => res.status(500).send());
        }
        dbInstance.read_property([session.user.id])
        .then(properties => res.status(200).send(properties))
        .catch( () => res.status(500).send());
    },

    deleteProperties: (req, res ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
    
        dbInstance.delete_property([ params.id ])
          .then( () => res.status(200).send() )
          .catch( () => res.status(500).send() );
    }
}