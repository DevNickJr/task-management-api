import { NextFunction, Request, Response } from "express";
import { ITask } from "./task.schema";
import { createTask, deleteTask, getTask, getTasks, updateTask } from "./task.service";

export async function createTaskHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const body: ITask = req.body
    const response = await createTask(body);

    res.json(response);
  } catch (e: any) {
    return next(e)
  }
}

export async function getTasksHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const response = await getTasks(req.params.id);

    res.json(response);
  } catch (e: any) {
    return next(e)
  }
}

export async function getTaskHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const response = await getTask(req.params.id);

    res.json(response);
  } catch (e: any) {
    return next(e)
  }
}

export async function updateTaskHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const body: Partial<ITask> = req.body
    const response = await updateTask(req.params.id, body);
    res.json(response);

  } catch (e: any) {
    return next(e)
  }
}

export async function deleteTaskHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const response = await deleteTask(req.params.id);

    res.json(response);
  } catch (e: any) {
    return next(e)
  }
}