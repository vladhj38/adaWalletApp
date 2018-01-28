import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, ModalController, ActionSheetController } from 'ionic-angular';
import { AdaProvider } from '../../providers/ada/ada';

// import * as ClipboardJS from '../../assets/clipboard/clipboard';

/**
 * Generated class for the AdaTradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ada-trade',
  templateUrl: 'ada-trade.html',
})
export class AdaTradePage {

  tabComponent: string = 'AdaPage';
  trade: string = "sendReceive";
  clipboard;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ada: AdaProvider,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController
    ) {
      console.log(ada.wallets);
      // this.ada.getWallets();
  }

  ionViewDidLoad(){
    if(this.ada.wallets.length){
      // this.clipboard = new ClipboardJS('#cpyBtn');
      // this.clipboard.on('success', () => {
      //   let toast = this.toastCtrl.create({
      //     message: 'Address copied to clipboard',
      //     duration: 3000,
      //     position: 'top'
      //   });
      //   toast.present();
      // });
    }
  }
  
}