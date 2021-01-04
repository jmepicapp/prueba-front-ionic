import { LoremIpsum } from 'lorem-ipsum';
import { Photo } from './../../models/photo';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Constants } from '../../constants';

@Component({
  selector: 'photo-list',
  templateUrl: 'photo-list.component.html',
  styleUrls: ['photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit, OnChanges {

  @Input() searchText: string;
  @Input() selectedSearchBy: string;

  displayedPhotoList: Photo[] = [];
  private maxElements = Constants.maxElements;
  private photoList: Photo[];
  private photoListOriginal: Photo[];

  constructor() {}

  ngOnInit() {
    this.generateList();
    this.loadPhotos();
  }

  /* 
  * Evento que se lanza cada vez que cambia alguno de los parámetros de búsqueda
  */
  ngOnChanges() {
    if (this.photoListOriginal) {
      this.photoList = this.photoListOriginal.slice();
      this.loadPhotos();
      
      //En caso de haber parámetros de búsqueda se hace el filtro en el listado
      if (this.searchText && this.selectedSearchBy) {
          this.filterPhotoList(this.searchText, this.selectedSearchBy);
      
      //En caso de estar el texto vacío se muestran el listado inicial
      } else if (!this.searchText && this.photoListOriginal) {
        this.displayedPhotoList = [];
        this.loadPhotos();
      }
    }
    
  }

  /*
  * Carga de imágenes inicial. El evento que tiene lugar es el scroll en este caso cada 10 imágenes.
  */
  loadPhotos(event?) {
    this.displayedPhotoList = [
      ...this.displayedPhotoList,
      ...this.photoList.slice(this.displayedPhotoList.length, this.displayedPhotoList.length + Constants.displayedImages),
    ];

    if (event) {
      event.target.complete();
    }
  }

  /*
  * Creación de cada uno de los elementos del listado.
  */
  private generateList() {
    this.photoList = [];
    for(let i = 0; i <= this.maxElements; i++) {
      let photoItem: Photo = {
        id: i,
        photo: `https://picsum.photos/id/${i}/500/500.jpg`,
        text: this.generateRandomLoremIpsumText()
      };
      this.photoList.push(photoItem);
      this.photoListOriginal = this.photoList.slice();
    }
  };

  /*
  * Creación de cada uno de los textos que acompaña a cada imagen.
  */
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

  /*
  * Filtro del listado según los parámetros de búsqueda recibidos.
  */
  private filterPhotoList(searchText: string, selectedSearchBy: string) {

    //En el caso del texto puede haber varias imágenes con el mismo texto.
    if (selectedSearchBy === Constants.textSearchType) {
      this.displayedPhotoList = this.displayedPhotoList.filter(photo => photo.text.includes(searchText));
      this.photoList = this.photoList.filter(photo => photo.text.includes(searchText));
    
      //En el caso del ID solo hay una única imagen que corresponda.
    } else if (selectedSearchBy === Constants.idSearchType) {
      this.displayedPhotoList = this.photoList.filter(photo => photo.id === Number(searchText));
    }
  }

}
