const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: process.env.LOCAL_MYSQL_USER,
    password: process.env.LOCAL_MYSQL_PASSWORD,
    database: process.env.LOCAL_MYSQL_DATABASE,
    host: process.env.LOCAL_MYSQL_HOST,
    dialect: "mysql",
  },
  test: {
    username: process.env.TEST_MYSQL_USER,
    password: process.env.TEST_MYSQL_PASSWORD,
    database: process.env.TEST_MYSQL_DATABASE,
    host: process.env.TEST_MYSQL_HOST,
    dialect: "mysql",
  },
  production: {
    username: process.env.AWS_MYSQL_USER,
    password: process.env.AWS_MYSQL_PASSWORD,
    database: process.env.AWS_MYSQL_DATABASE,
    host: process.env.AWS_MYSQL_HOST,
    dialect: "mysql",
    logging:false,
  },
}
