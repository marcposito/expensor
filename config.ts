const {
    APP_NAME = 'expensor',
    APP_ENV = 'local',
    PORT = 5200,
    MYSQL_DATABASE_HOST = 'localhost',
    MYSQL_DATABASE_USER = 'root',
    MYSQL_DATABASE_PASSWORD = '123456'
} = process.env;

const config = {
    app_name: APP_NAME,
    env: APP_ENV,
    port: PORT,
    mysql: {
        database_host: MYSQL_DATABASE_HOST,
        database_user: MYSQL_DATABASE_USER,
        database_password: MYSQL_DATABASE_PASSWORD
    }
};

export default config;
