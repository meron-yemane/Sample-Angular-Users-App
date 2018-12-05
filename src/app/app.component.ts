import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <!--- header --->
    <app-header></app-header>

    <!--- routes get injected here --->
    <router-outlet></router-outlet>

    <!--- footer --->
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  constructor(private http: HttpClient) {
    
  }
}
