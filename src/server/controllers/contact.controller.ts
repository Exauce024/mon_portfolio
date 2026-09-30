import { Request, Response, NextFunction } from 'express';
import { ContactService } from '../services/contact.service.js';

export class ContactController {
  public static getContactInfo(_req: Request, res: Response, next: NextFunction): void {
    try {
      const contactInfo = ContactService.getContactInfo();
      res.status(200).json({
        status: 'success',
        data: contactInfo
      });
    } catch (error) {
      next(error);
    }
  }
}
