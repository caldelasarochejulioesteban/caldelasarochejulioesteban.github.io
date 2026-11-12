import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SkillModel } from '../../models/skills/skills.model';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  accesoSkills = 'skills service running...';

  constructor(private firestore: Firestore) {}

  getSkills(): Observable<SkillModel[]> {
    const skillsCollection = collection(this.firestore, 'skills');
    return collectionData(skillsCollection, { idField: 'id' }).pipe(
      catchError((error: unknown) => {
        console.error('No se pudo leer la colección "skills" de Firestore.', error);
        return throwError(() => error);
      }),
    );
  }
}
