import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-components-demo',
  templateUrl: './components-demo.page.html',
  styleUrls: ['./components-demo.page.scss'],
})
export class ComponentsDemoPage {
  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  async mostrarAlert() {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: 'Este é um alert do Ionic!',
      buttons: ['OK']
    });
    await alert.present();
  }

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'Toast exibido com sucesso!',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }
}