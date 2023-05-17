const jwt = require('jsonwebtoken');


/**
 * @swagger
 * components:
 *   schemas:
 *     LoginRequest:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: username 
 *         password:
 *           type: string
 *           description: password of account
 *       example:
 *         username: myTestUser
 *         password: myPassword
 */
const login = (req, res) => {
    const { username, password } = req.body;
    const tenantId = 'newTenant';
    const token = jwt.sign({ tenantId }, 'secret');
    res.status(200).send({token});
};

module.exports = {
    login
};