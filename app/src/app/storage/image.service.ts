import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentChangeAction,
  DocumentReference,
} from '@angular/fire/firestore';
import { Image } from './image.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private firestore: AngularFirestore) {}

  getImages(): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore.collection('images').snapshotChanges();
  }

  createImage(image: Image): Promise<DocumentReference> {
    return this.firestore.collection('images').add(image);
  }
  updateImage(image: Image): void {
    delete image.id;
    this.firestore.doc('images/' + image.id).update(image);
  }
  deleteImage(imageId: string): void {
    this.firestore.doc('images/' + imageId).delete();
  }
}
