import { Component } from '@angular/core';
import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';

@Component ({
    selector: 'page-tabs',
    template: `
    <ion-tabs selectedIndex = "1" color ="bobbygrey">
    <ion-tab [root]="libraryPage" tabTitle ="Library" tabIcon="book"></ion-tab>
    <ion-tab [root]="favoritesPage" tabTitle = "Favorites" tabIcon = "star"></ion-tab>
      
    </ion-tabs>

    `
})
export class TabsPage {
  favoritesPage = FavoritesPage;
  libraryPage = LibraryPage;
}