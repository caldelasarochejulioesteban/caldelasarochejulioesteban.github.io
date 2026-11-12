import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CertificateModel } from '../../models/certificates/certificates.model';

@Injectable({ providedIn: 'root' })
export class CertificatesService {
  accesoCertificates = 'certificates service running...';

  constructor(private firestore: Firestore) {}

  getCertificates(): Observable<CertificateModel[]> {
    const certificatesCollection = collection(this.firestore, 'certificates');
    return collectionData(certificatesCollection, { idField: 'id' }).pipe(
      catchError((error: unknown) => {
        console.error('No se pudo leer la colección "certificates" de Firestore.', error);
        return throwError(() => error);
      }),
    );
  }
}
