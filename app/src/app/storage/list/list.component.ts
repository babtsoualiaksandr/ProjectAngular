import { Component, OnInit } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { Observable, from } from 'rxjs';
import { finalize, take } from 'rxjs/operators';
import { Image } from '../image.model';
import { ImageService } from '../image.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  images!: Image[];



  ref: AngularFireStorageReference | undefined;
  task!: AngularFireUploadTask;
  uploadProgress!: Observable<number | undefined>;
  downloadURL!: Observable<string>;
  listDownLoad: string[] = [];

  formImage = new FormGroup({
    name: new FormControl(),
    url: new FormControl()
  });


  constructor(
    private afStorage: AngularFireStorage,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {

  }
  upload(event: any): void {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    const ref = this.afStorage.ref(id);
    this.task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = ref.getDownloadURL();
        })
      )
      .subscribe();

    this.downloadURL.subscribe((url) => {
      this.listDownLoad.push(url);
    });
    this.imageService.getImages().subscribe((data) => {
      this.images = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object),
        } as Image;
      });
    });
  }

  create(image: Image): void {
    this.imageService.createImage(image);
  }

  update(image: Image): void {
    this.imageService.updateImage(image);
  }

  delete(id: string): void {
    this.imageService.deleteImage(id);
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    this.downloadURL.subscribe((url) => {
      this.formImage.value.url = url;
      console.warn('***********', this.formImage.value);
      this.create({name: this.formImage.value.name, url: this.formImage.value.url, id: '' });
      console.warn('===========', this.formImage.value);
    });
  }
}
