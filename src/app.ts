import { startServer } from './server';
import performDatabaseConnections from "./infrastructure/database/connectionHandler";

const bootstrapApplication = async () => {
    await performDatabaseConnections();
    startServer();
}

bootstrapApplication();