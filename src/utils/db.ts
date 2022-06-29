import mongoose from "mongoose";
import Logger from "./logger";

export default {
	connect: async (uri: string) => {
		try {
			await mongoose.connect(uri);
			Logger.info("MongoDB connected");
		} catch (error) {
			Logger.error("Error in database connectivity");
			Logger.error(error);
		}
	},
};
