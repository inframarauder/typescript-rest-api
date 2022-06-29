import { GeneralError } from "../utils/error";
import Logger from "../utils/logger";
import { Error } from "mongoose";
import { Request, Response, NextFunction } from "express";

export default (err: any, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof GeneralError) {
		const code: number = err.getCode();
		return res.status(code).json({ error: err.message });
	} else if (err instanceof Error.ValidationError) {
		return res.status(400).json({
			error: err.errors.name.message,
		});
	} else {
		Logger.error(err);
		return res.status(500).json({ error: "Internal Server Error!" });
	}
};
