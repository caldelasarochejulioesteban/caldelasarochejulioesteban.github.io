import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { EducationModel } from '../models/education/education.model';
import { EducationService } from '../services/education-service/education.service';

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  readonly education$: Observable<EducationModel[]> =
    inject(EducationService).getEducation();
}
