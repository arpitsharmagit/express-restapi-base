const parsePort = (value) => {
    var port = parseInt(value, 10);

    if (isNaN(value)) return val;
    if (port >= 0) return port;
    
    return false;
};

module.exports = {
    parsePort
};