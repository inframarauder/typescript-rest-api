import express from "express";
import cors from "cors";
import config from "./config";
import db from "./utils/db";
import Logger from "./utils/logger";
import errorHandler from "./middlewares/errorHandler";
import requestLogger from "./middlewares/requestLogger";
import todoRoutes from "./routes";

// Create express app :
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Request logging :
app.use(requestLogger);

// root route :
app.get("/", (req: express.Request, res: express.Response) => {
	return res.sendStatus(200);
});

// todo routes :
app.use("/todos", todoRoutes);

// error handler :
app.use(errorHandler);

// Start server :
app.listen(config.server.port, () => {
	Logger.info(`Server started on port ${config.server.port}`);

	// connect to database :
	db.connect(config.mongo.uri);
});
