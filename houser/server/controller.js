module.exports = {

    read: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.getAllHouses().then(houses => res.status(200).send(houses)).catch((err)=>res.status(500).send(err))
    },

    create: (req, res) => {
        const dbInstance = req.app.get('db')

        const {name, address, city, state, zip} = req.body;

        dbInstance.addHouse([name, address, city, state, zip]).then(house=>res.status(200).send(house))
    },

    update: (req, res) => {

    },

    delete: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.deleteHouse([req.params.id]).then(house=>{
            re.status(200).send(house)
        })
    }
}