const express = require('express');
const jwt = require('jsonwebtoken');

const login = (req, res) => {
    const { username, password } = req.body;
    const token = jwt.sign({ tenantId }, 'secret');
    res.status(200).send({token});
};

module.exports = {
    login
};