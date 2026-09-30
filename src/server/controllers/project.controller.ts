import { Request, Response, NextFunction } from 'express';
import { ProjectService } from '../services/project.service.js';

export class ProjectController {
  public static getAllProjects(req: Request, res: Response, next: NextFunction): void {
    try {
      const category = req.query.category as string;
      const projects = category 
        ? ProjectService.getProjectsByCategory(category)
        : ProjectService.getAllProjects();
      
      res.status(200).json({
        status: 'success',
        data: projects
      });
    } catch (error) {
      next(error);
    }
  }

  public static getProjectById(req: Request, res: Response, next: NextFunction): void {
    try {
      const { id } = req.params;
      const project = ProjectService.getProjectById(id);

      if (!project) {
        res.status(404).json({
          status: 'error',
          message: `Projet avec l'identifiant '${id}' introuvable.`
        });
        return;
      }

      res.status(200).json({
        status: 'success',
        data: project
      });
    } catch (error) {
      next(error);
    }
  }
}
