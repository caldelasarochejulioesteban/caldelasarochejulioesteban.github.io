import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { InterestModel } from '../models/interests/interests.model';
import { InterestsService } from '../services/interests-service/interests.service';

@Component({
  selector: 'app-interests',
  standalone: false,
  templateUrl: './interests.html',
  styleUrl: './interests.css',
})
export class Interests {
  readonly interests$: Observable<InterestModel[]> =
    inject(InterestsService).getInterests();
}
