import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { LanguageModel } from '../models/languages/languages.model';
import { LanguagesService } from '../services/languages-service/languages.service';

@Component({
  selector: 'app-languages',
  standalone: false,
  templateUrl: './languages.html',
  styleUrl: './languages.css',
})
export class Languages {
  readonly languages$: Observable<LanguageModel[]> =
    inject(LanguagesService).getLanguages();
}
