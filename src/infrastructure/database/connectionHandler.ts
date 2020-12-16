import MySQLConnection from "./MySQLConnection";

 const performDatabasesConnections = async () => {
    try{
        await Promise.all([MySQLConnection.connect()]);
    }catch (e) {
        console.log(e);
    }
}

export default performDatabasesConnections;
