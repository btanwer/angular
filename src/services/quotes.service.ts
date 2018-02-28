import { Quote } from "../data/quoteinterface";
import { isQuote } from "@angular/compiler";

export class QuotesService{

    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorite(quote: Quote){
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }

    removeQuoteFromFavorites(quote:Quote){
        //get position of the quote in favorite quote array
        const position = this.favoriteQuotes
        .findIndex((quoteIs: Quote) => {
            return quoteIs.id == quote.id;
        });
        this.favoriteQuotes.splice(position, 1);
    }

    getFavoriteQuotes(){
        return this.favoriteQuotes.slice();
        
    }

    isFavoriteQuote(quote: Quote){
        return this.favoriteQuotes.find((quoteIs: Quote) =>{
            return quoteIs.id == quote.id;
        });
    }

}