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

  /*
  * Bandera que avisa del momento en el que se carga la imagen desde el servidor. 
  */
  onLoadImage() {
    this.photoIsLoaded = true;
  }

}
