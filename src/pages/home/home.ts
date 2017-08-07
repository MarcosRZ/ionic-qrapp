import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

// Components
import { ToastController, Platform } from 'ionic-angular';

// Servicios
import { HistorialService } from "../../providers/historial"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(
    private barcodeScanner: BarcodeScanner,
    private toastCtrl: ToastController,
    private platform: Platform,
    private historialService: HistorialService
  ) {

  }

  public scan(){

    if (!this.platform.is('cordova')){
      this.historialService.agregarHistorial("http://www.google.com")
      return; 
    }

    this.barcodeScanner.scan().then((barcodeData) => {
    // Success! Barcode data is here
     console.log("Result: "+ barcodeData.text)
     console.log("Format: "+ barcodeData.format)
     console.log("Cancelled: "+ barcodeData.cancelled)

      if (!barcodeData.cancelled && barcodeData.text != ""){
        this.historialService.agregarHistorial(barcodeData.text)
      }

    }, (err) => {
        console.error("Error: " + err)
        this.mostrarError("Error: " + err)
    });
  }

  public mostrarError(msg:string){

    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  

  }
}
