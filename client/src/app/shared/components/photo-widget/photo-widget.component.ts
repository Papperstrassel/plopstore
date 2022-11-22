import { Component,Output, OnInit } from '@angular/core';
import {ImageCroppedEvent, base64ToFile} from 'ngx-image-cropper';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-widget',
  templateUrl: './photo-widget.component.html',
  styleUrls: ['./photo-widget.component.scss']
})
export class PhotoWidgetComponent implements OnInit {
  @Output() addFile = new EventEmitter();
  files: File[] = [];
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imageIsAdded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  onUpload() {
    console.log(base64ToFile(this.croppedImage));
    this.imageIsAdded = true;
    this.addFile.emit(base64ToFile(this.croppedImage));
  }


  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  onSelect(event) {
    this.files = [];
    this.files.push(...event.addedFiles);
    this.fileChangeEvent(this.files[0]);
  }


}
