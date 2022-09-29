const { Sequelize } = require('sequelize');

const sequelizeCon = new Sequelize('postgres://pzazadqwdddcjt:31c41e50fa05ccc81b282581da546bae68d989107422d4be19427b280a7e67c8@ec2-44-205-63-142.compute-1.amazonaws.com:5432/dt354pd6rp4o5', {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
});

module.exports = { sequelizeCon };

