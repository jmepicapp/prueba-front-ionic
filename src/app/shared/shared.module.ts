import { SearchBarComponent } from './components/search-toolbar/search-bar.component';
import { IonicModule } from '@ionic/angular';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoComponent } from './components/photo/photo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    CommonModule
  ],
  exports: [
    PhotoComponent,
    PhotoListComponent,
    SearchBarComponent
  ]
})
export class SharedModule { }
