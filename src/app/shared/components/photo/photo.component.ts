import { Photo } from './../../models/photo';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'photo-component',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit{

  @Input() photoItem: Photo;
  photoIsLoaded: boolean;

  constructor() { }

  ngOnInit() {
    this.photoIsLoaded = false;
  }

  onLoadImage() {
    this.photoIsLoaded = true;
  }

}
