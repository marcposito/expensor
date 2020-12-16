const {
    APP_NAME = 'expensor',
    APP_ENV = 'local',
    PORT = 5200,
} = process.env;

const config = {
    app_name: APP_NAME,
    env: APP_ENV,
    port: PORT,
};

export default config;
