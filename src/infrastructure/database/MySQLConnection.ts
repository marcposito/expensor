import * as mysql from 'mysql';

import config from "../../../config";


class MySQLConnection {
    private connection: mysql.Connection;

    createConnection(): any {
        this.connection = mysql.createConnection({
            host: config.mysql.database_host,
            user: config.mysql.database_user,
            password: config.mysql.database_password
        });
    };

    connect(): Promise<any> {
        this.createConnection();
        return new Promise((resolve, reject) => {
            this.connection.connect((err: any) => {
                if (err) {
                    console.error('error connecting: ' + err.stack);
                    reject(err);
                }
                console.log('connected as id ' + this.connection.threadId);
                resolve({});
            });
        })
    }
}

export default new MySQLConnection();