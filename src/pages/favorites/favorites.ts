import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuotesService } from '../../services/quotes.service';
import { Quote } from '../../data/quoteinterface';
import { ModalController } from 'ionic-angular';
import { QuotePage } from '../quote/quote';



/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];
  
  constructor(private quoteService: QuotesService,
    private modalCtrl : ModalController) {} 

  // ionVeiwWillEnter(){
  //   console.log('ion view will enter');
    
  //   this.quotes = this.quoteService.getFavoriteQuotes();
  //   console.log(this.quotes);
    
  // }
  ionViewDidEnter(){
    console.log('Ion View Entered');
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

//   ngOnInit(){
//     this.quotes = this.quoteService.getFavoriteQuotes();
//     console.log('i have entered');
    
//  }
 onViewQuote(quote: Quote){
  const modal = this.modalCtrl.create(QuotePage, quote);
  modal.present();
  modal.onDidDismiss((remove: boolean)=>{
    console.log(remove);
    if (remove){
   this.onRemoveFromFavorite(quote);
    }
    
    
  });

}
onRemoveFromFavorite(quote){
  this.quoteService.removeQuoteFromFavorites(quote);  
  const position = this.quotes.findIndex((isQuote: Quote)=>{
    return isQuote.id == quote.id ;
  });
  this.quotes.splice(position,1);
}


}
