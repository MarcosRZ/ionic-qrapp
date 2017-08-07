import { Injectable } from '@angular/core';

import { ScanData } from '../models/scan-data.model'

import { InAppBrowser } from '@ionic-native/in-app-browser';

@Injectable()
export class HistorialService {

  private _historial: ScanData[] = [];
  

  constructor(private iab: InAppBrowser) {
    console.log('Hello HistorialProvider Provider');
  }

  agregarHistorial(texto:string){
    let data = new ScanData(texto)

    this._historial.unshift(data);
    console.log(this._historial)

    this.abrirScan(0);
  }

  abrirScan(index: number){
    let scanData = this._historial[index];

      switch (scanData.tipo){
        case "http":
          const browser = this.iab.create(scanData.info, "_system");
        break;

        default: 
          console.error("Tipo no soportado")
      }
  }

  cargarHistorial(){
    return this._historial;
  }

}
