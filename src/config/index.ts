import dotenv from "dotenv";

dotenv.config();

export default {
	mongo: {
		uri: process.env.MONGO_URI || "",
	},
	server: {
		port: process.env.PORT ? Number(process.env.PORT) : 3000,
	},
};
