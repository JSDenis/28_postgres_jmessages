//jms
const Pool = require('pg').Pool

const pool = new Pool({
    user: 'yxreaiovdnghaz',
    password: '089f0e9fe369929a36eb4c5dd0061acec38a3bb02ae7e4b5698fda0a476bb8cf',
    host:'ec2-54-228-218-84.eu-west-1.compute.amazonaws.com',
    port: 5432,
    database: 'dasnd17m0ge6h1',
    ssl: {rejectUnauthorized: false}
})

module.exports = pool


// Host  'ec2-54-228-218-84.eu-west-1.compute.amazonaws.com'
// Database 'dasnd17m0ge6h1'
// User 'yxreaiovdnghaz'
// Port '5432'
// Password '089f0e9fe369929a36eb4c5dd0061acec38a3bb02ae7e4b5698fda0a476bb8cf'
// URI 'postgres://yxreaiovdnghaz:089f0e9fe369929a36eb4c5dd0061acec38a3bb02ae7e4b5698fda0a476bb8cf@ec2-54-228-218-84.eu-west-1.compute.amazonaws.com:5432/dasnd17m0ge6h1'
// Heroku CLI 'heroku pg:psql postgresql-trapezoidal-23542 --app jmessages'

