import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getAllCategory() {
    return new Promise((resolve, reject) => {
      this.firestore.collection('categories').snapshotChanges().pipe(
        map((changes: any) =>
          changes.map((c: any) =>
            ({
              id: c.payload.doc.id,
              ...c.payload.doc.data()
            })
          )
        )
      ).subscribe((data: any) => {
        resolve(data);
      }, (error: any) => {
        reject(error);
      })
    })
  }
}