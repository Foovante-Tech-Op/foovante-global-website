import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'fv-root',
    imports: [RouterOutlet],
    template: `<router-outlet></router-outlet>`,
    styles: [`:host { display: block; }`]
})
export class AppComponent {}
