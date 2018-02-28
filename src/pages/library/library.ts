import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  { Quote } from '../../data/quoteinterface';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';

/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {
  quoteCollection: { category: string, quotes: Quote[], icon:string}[];
  quotesPage = QuotesPage;
  // we add the [] to quoteCollection as its object array
  // otherwise we will have an issue with 
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // quoteCollection below is the quotes we load on init with data form file.
    this.quoteCollection = quotes;
  }

}
