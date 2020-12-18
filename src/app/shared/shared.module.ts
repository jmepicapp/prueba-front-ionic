import { IonicModule } from '@ionic/angular';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoComponent } from './components/photo/photo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    CommonModule
  ],
  exports: [
    PhotoComponent,
    PhotoListComponent
  ]
})
export class SharedModule { }
