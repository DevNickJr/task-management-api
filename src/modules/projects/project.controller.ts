import { NextFunction, Request, Response } from "express";
import { IProject } from "./project.schema";
import { createProject, deleteProject, getProject, getProjects, updateProject } from "./project.service";
import { RequestWithUser } from "src/interfaces/helper";

export async function createProjectHandler(
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) {
  try {
    const body: IProject = req.body
    const response = await createProject({ ...body, owner: req.user?._id! });

    res.status(201).json(response);
  } catch (e: any) {
    return next(e)
  }
}

export async function getProjectsHandler(
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) {
  try {
    const response = await getProjects(req.user?._id!);

    res.status(200).json(response);
  } catch (e: any) {
    return next(e)
  }
}

export async function getProjectHandler(
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) {
  try {
    const response = await getProject(req.user?._id!, req.params.projectId);

    res.status(200).json(response);
  } catch (e: any) {
    return next(e)
  }
}

export async function updateProjectHandler(
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) {
  try {
    const body: Partial<IProject> = req.body
    const response = await updateProject(req.user?._id!, req.params.projectId, body);
    res.status(200).json(response);

  } catch (e: any) {
    return next(e)
  }
}

export async function deleteProjectHandler(
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) {
  try {
    const response = await deleteProject(req.user?._id!, req.params.projectId);

    res.status(200).json(response);
  } catch (e: any) {
    return next(e)
  }
}