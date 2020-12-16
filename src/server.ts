import * as cors from 'cors';
import * as express from 'express';
import { Request, Response } from 'express'

import config from "../config";
import routes from "./infrastructure/routes";

export const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (_req: Request, res: Response): void => {
    res.send(`${config.app_name} ms is running`);
});

Object.keys(routes)
    .forEach((routeStart: string): void => {
        app.use(`/${routeStart}`, routes[routeStart]);
    });

export const startServer = (): void => {
    app.listen(5200, (): void => {
        console.log(`${config.app_name} running on port ${config.port}`);
    });
};

