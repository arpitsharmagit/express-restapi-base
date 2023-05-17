
const getUser = (req, res) => {
    const { _id } = req.body;
    const customer = { _id: 'customer 1', firstname: ' Customer', lastname: '1' };
    res.status(200).send(customer);
};

const createUser = (req, res) => {
    const { firstname, lastname, username } = req.body;
    console.log('customer created', { firstname, lastname, username });
    res.status(201).send({ message: 'customer created' });
};

module.exports = {
    createUser,
    getUser
};