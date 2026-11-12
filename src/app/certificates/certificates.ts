import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { CertificateModel } from '../models/certificates/certificates.model';
import { CertificatesService } from '../services/certificates-service/certificates.service';

@Component({
  selector: 'app-certificates',
  standalone: false,
  templateUrl: './certificates.html',
  styleUrl: './certificates.css',
})
export class Certificates {
  readonly certificates$: Observable<CertificateModel[]> =
    inject(CertificatesService).getCertificates();
}
