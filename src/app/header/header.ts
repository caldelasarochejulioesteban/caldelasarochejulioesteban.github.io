import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { HeaderModel } from '../models/header/header.model';
import { HeaderService } from '../services/header-service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  standalone: false,
})
export class Header {
  readonly header$: Observable<HeaderModel[]> = inject(HeaderService).getHeader();
}