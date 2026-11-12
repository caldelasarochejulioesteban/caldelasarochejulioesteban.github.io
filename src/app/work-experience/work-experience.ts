import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { WorkExperienceModel } from '../models/work-experience/work-experience.model';
import { WorkExperienceService } from '../services/work-experience-service/work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.html',
  styleUrls: ['./work-experience.css'],
  standalone: false,
})
export class WorkExperience {
  readonly workExperience$: Observable<WorkExperienceModel[]> =
    inject(WorkExperienceService).getWorkExperience();
}