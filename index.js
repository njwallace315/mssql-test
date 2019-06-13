var mssql = require('mssql');
require('dotenv').config({ path: `${process.env.ENV_PATH}/mssql.env` });

const config = {
    server: process.env.server,
    port: parseInt(process.env.port),
    user: process.env.username,
    password: process.env.password,
    database: process.env.database,
};

var connect = async function () {
    try {
        arrowConn = await new mssql.ConnectionPool(config).connect();
        console.log('connected')
    } catch (err) {
        console.log('error initializing mssql connection');
        console.error(err);
    }
}

connect()
setTimeout(function () {
}, 100000 * 1000)

