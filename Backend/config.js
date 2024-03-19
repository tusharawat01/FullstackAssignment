const config = {
     port: process.env.PORT || 3000,
     mysqlHost: process.env.MYSQL_HOST,
     mysqlUser: process.env.MYSQL_USER,
     mysqlPassword: process.env.MYSQL_PASSWORD,
     mysqlDatabase: process.env.MYSQL_DATABASE,
     redisHost: process.env.REDIS_HOST,
     redisPort: process.env.REDIS_PORT || 6379
    
}

module.exports = config;