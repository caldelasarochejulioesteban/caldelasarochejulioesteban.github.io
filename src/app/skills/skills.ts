import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { SkillModel } from '../models/skills/skills.model';
import { SkillsService } from '../services/skills-service/skills.service';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  readonly skills$: Observable<SkillModel[]> = inject(SkillsService).getSkills();
}
