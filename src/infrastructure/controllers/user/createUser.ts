import { Request, Response } from "express";

export default async (_req: Request, res: Response): Promise<any> => {
    try {
        res.json({Message: "Ok"}).status(200);
    } catch (err) {
        return res.status(500).send('Internal Server Error');
    }
}
