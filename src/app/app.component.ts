import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Constants } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  searchFields: string[];
  selectedSearchBy: string;
  searchText: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.setSearchFields();
    });
  }

  /*
  * Envío de los tipos de búsqueda al componente search-bar.
  */
  setSearchFields() {
    this.searchFields = [Constants.idSearchType, Constants.textSearchType];
  }

  /*
  * Recepción del contenido del campo de texto desde componente search-bar.
  */
  filterPhotoList(searchText: string){
    this.searchText = searchText;
  }

  /*
  * Recepción del contenido del tipo de búsqueda desde componente search-bar.
  */
  selectSearchBy(selectedSearchBy: string) {
    this.selectedSearchBy = selectedSearchBy;
  }
}
