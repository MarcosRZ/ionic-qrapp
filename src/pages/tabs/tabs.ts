import { Component } from '@angular/core';
import {HomePage, GuardadosPage} from '../index.paginas'

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

    tab1: any = HomePage;
    tab2: any = GuardadosPage;
  constructor() {
  }


}
