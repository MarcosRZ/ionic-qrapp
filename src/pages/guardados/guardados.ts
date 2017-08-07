import { Component } from '@angular/core';

import { HistorialService } from '../../providers/historial'
import { ScanData } from '../../models/scan-data.model'
/**
 * Generated class for the GuardadosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html',
})
export class GuardadosPage {

  historial: ScanData[] = [];

  constructor(private _historialService: HistorialService) {
  }

  ionViewDidLoad() {
    this.historial = this._historialService.cargarHistorial();
    console.log('ionViewDidLoad GuardadosPage');
  }

  abrirScan(index: number){
    this._historialService.abrirScan(index);
  }

}
