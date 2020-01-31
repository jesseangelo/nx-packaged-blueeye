import { Component } from '@angular/core';
import { OneLib } from '@jetblue/one-lib';

@Component({
  selector: 'jetblue-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blueeye-platform';
  business: OneLib = new OneLib();
}
