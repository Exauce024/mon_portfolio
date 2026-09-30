import { ContactInfo } from '../types/index.js';

export class ContactService {
  public static getContactInfo(): ContactInfo {
    return {
      name: 'Exaucé Banza',
      title: 'Analyste Programmeur, Architecte de Bases de Données, DevOps & Cloud',
      tagline: 'Je conçois des solutions web sur mesure, des APIs robustes et des architectures de bases de données optimisées pour la gestion d\'entreprise.',
      availability: 'Disponible pour opportunités & missions en freelance / CDI',
      email: process.env.CONTACT_EMAIL || 'exaucebanza@gmail.com',
      whatsapp: process.env.CONTACT_WHATSAPP || '243810000000',
      linkedin: process.env.CONTACT_LINKEDIN || 'https://linkedin.com/in/exauce-banza',
      github: process.env.CONTACT_GITHUB || 'https://github.com/exaucebanza',
      gitlab: process.env.CONTACT_GITLAB || 'https://gitlab.com/exaucebanza',
      location: 'Lubumbashi, RDC / Remote'
    };
  }
}
