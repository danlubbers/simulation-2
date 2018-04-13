module.exports = {

    read: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.getAllHouses().then(houses => res.status(200).send(houses)).catch((err)=>res.status(500).send(err))
    },

    create: (req, res) => {

    },

    update: (req, res) => {

    },

    delete: (req, res) => {
        
    }
}