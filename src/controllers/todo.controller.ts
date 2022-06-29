import { Request, Response, NextFunction } from "express";
import Todo from "../models/todo.model";
import { NotFound } from "../utils/error";

export default {
	createTodo: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const todo = await Todo.create(req.body);
			return res.status(201).json(todo);
		} catch (error) {
			next(error);
		}
	},

	listTodos: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const todos = await Todo.find().sort({ _id: -1 }).lean();
			return res.status(200).json(todos);
		} catch (error) {
			next(error);
		}
	},

	readTodo: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const todo = await Todo.findById(req.params.id).lean();
			if (!todo) {
				throw new NotFound("Todo item not found!");
			} else {
				return res.status(200).json(todo);
			}
		} catch (error) {
			next(error);
		}
	},

	updateTodo: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
				new: true,
				runValidators: true,
			});
			if (!todo) {
				throw new NotFound("Todo item not found!");
			} else {
				return res.status(200).json(todo);
			}
		} catch (error) {
			next(error);
		}
	},

	deleteTodo: async (req: Request, res: Response, next: NextFunction) => {
		try {
			await Todo.findByIdAndDelete(req.params.id);
			return res.status(204).json({ message: "Todo deleted" });
		} catch (error) {
			next(error);
		}
	},
};
