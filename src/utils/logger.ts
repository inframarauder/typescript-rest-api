import chalk from "chalk";
import { Request } from "express";

export default class Logger {
	// info logger
	public static info = (args: any) => {
		// log level and timestamp :
		const chalkedLogMetadata = chalk.blue(
			`[${new Date().toLocaleString()}][INFO]`
		);

		// log message :
		const chalkedLogMessage =
			typeof args === "string" ? chalk.blueBright(args) : args;

		console.info(chalkedLogMetadata, chalkedLogMessage);
	};

	// error logger
	public static error = (args: any) => {
		// log level and timestamp :
		const chalkedLogMetadata = chalk.red(
			`[${new Date().toLocaleString()}][ERROR]`
		);

		// log message :
		const chalkedLogMessage =
			typeof args === "string" ? chalk.redBright(args) : args;

		console.error(chalkedLogMetadata, chalkedLogMessage);
	};

	// warn logger
	public static warn = (args: any) => {
		// log level and timestamp :
		const chalkedLogMetadata = chalk.yellow(
			`[${new Date().toLocaleString()}][WARN]`
		);

		// log message :
		const chalkedLogMessage =
			typeof args === "string" ? chalk.yellowBright(args) : args;

		console.warn(chalkedLogMetadata, chalkedLogMessage);
	};

	// incoming requests logger :
	public static logRequest = (req: Request) => {
		const requestLog = `Incoming request : ${req.method} ${req.url} | IP : ${req.ip}`;
		this.info(requestLog);
	};
}
