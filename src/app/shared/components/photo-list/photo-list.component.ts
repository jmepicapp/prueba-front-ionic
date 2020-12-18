import { LoremIpsum } from 'lorem-ipsum';
import { Photo } from './../../models/photo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'photo-list',
  templateUrl: 'photo-list.component.html',
  styleUrls: ['photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {

  displayedPhotoList: Photo[] = [];
  private maxElements = 1084;
  private photoList: Photo[];


  constructor() {}

  ngOnInit() {
    this.generateList();
    this.loadPhotos();
    console.log(this.photoList);
  }

  loadPhotos(event?) {
    this.displayedPhotoList = [
      ...this.displayedPhotoList,
      ...this.photoList.slice(this.displayedPhotoList.length, this.displayedPhotoList.length + 10),
    ];

    if (event) {
      event.target.complete();
    }
  }

  private generateList() {
    this.photoList = [];
    for(let i = 0; i <= this.maxElements; i++) {
      let photoItem: Photo = {
        id: i,
        photo: `https://picsum.photos/id/${i}/500/500.jpg`,
        text: this.generateRandomLoremIpsumText()
      };
      this.photoList.push(photoItem);
    }
  };

  private generateRandomLoremIpsumText(): string {
    const text = new LoremIpsum({
      sentencesPerParagraph: {
        max: 2,
        min: 1
      }, 
      wordsPerSentence: {
        max: 16,
        min: 4
      }
    });

    return text.generateParagraphs(1);
  }

}
