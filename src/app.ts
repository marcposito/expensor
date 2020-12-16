import { startServer } from './server';
import performDatabasesConnections from "./infrastructure/database/connectionHandler";

const bootstrapApplication = async () => {
    await performDatabasesConnections();
    startServer();
}

bootstrapApplication();