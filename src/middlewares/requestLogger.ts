import Logger from "../utils/logger";
import { Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
	Logger.logRequest(req);
	next();
};
