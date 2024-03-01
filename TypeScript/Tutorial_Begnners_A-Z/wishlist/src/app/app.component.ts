import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    new WishItem ('To Learn Angular'),
    new WishItem ('Get Coffe', true),
    new WishItem ('Finda grass that cuts itself')
  ];
  title = 'wishlist';
}
