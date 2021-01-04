import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent{

  @Input() searchFields: any[];
  @Output() searchTextEvent = new EventEmitter<string>();
  @Output() searchBy = new EventEmitter<string>();
  searchText: string; 

  constructor() { }

  /*
  * Envío del contenido del campo búsqueda.
  */
  filterPhotoList(event: any) {
    this.searchText = event.target.value;
    if(this.searchText) {
      this.searchTextEvent.emit(this.searchText);
      this.searchBy.emit
    } else {
      this.searchTextEvent.emit('')
    }
  }

  /*
  * Envío del tipo de búsqueda seleccionado.
  */
  selectSearchBy(event: any) {
    this.searchBy.emit(event.detail.value);
  }
}
