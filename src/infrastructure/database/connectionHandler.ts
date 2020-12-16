import MySQLConnection from "./MySQLConnection";

 const performDatabaseConnections = async () => {
    try{
        await Promise.all([MySQLConnection.connect()]);
    }catch (e) {
        console.log(e);
    }
}

export default performDatabaseConnections;
