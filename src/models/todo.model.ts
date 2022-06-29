import mongoose, { Document, Schema } from "mongoose";

export interface ITodo {
	name: string;
	done: boolean;
}

export interface ITodoModel extends ITodo, Document {}

const TodoSchema: Schema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
		},
		done: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

export default mongoose.model<ITodoModel>("Todo", TodoSchema);
