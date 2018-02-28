import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from "../../data/quoteinterface";
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { QuotesService } from '../../services/quotes.service';
/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: { category: string, quotes: Quote[], icon: string }

  constructor(private navParams: NavParams,
    private alertCtl: AlertController,
  private quoteService: QuotesService) {

  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.quoteGroup = this.navParams.data;
  }
  // ionViewDidLoad (){
  //   this.quoteGroup = this.navParams.data;
  // }
  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCtl.create({
      title: 'Add Quote',
      subTitle: 'Are you Sure?',
      message: 'This will add the quote to your favorite list',
      buttons: [{
        text: 'Yes',
        handler: () => {
          this.quoteService.addQuoteToFavorite(selectedQuote);
          console.log('OK added the quote');
        }
      },
      {
        text: 'No, thanks',
        handler: () => {
          console.log('cancelled');

        }

      }]
    });
    alert.present();
  }

  onRemoveFromFavorite(quote){
this.quoteService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote){
    return this.quoteService.isFavoriteQuote(quote); 
   }

}
