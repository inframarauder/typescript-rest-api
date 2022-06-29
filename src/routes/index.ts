import express from "express";
import todoController from "../controllers/todo.controller";

const router = express.Router();

router.get("/", todoController.listTodos);
router.get("/:id", todoController.readTodo);
router.post("/", todoController.createTodo);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

export default router;
