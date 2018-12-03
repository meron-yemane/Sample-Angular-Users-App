import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Hello I am an Angular app.
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'my-angular-app';
}
