import { Component } from '@angular/core';
import { HelloComponent } from './libex/hello/hello.component';
import { ShellService } from './libex/services/shell.service';

@Component({
  selector: 'libex-root',
  template: `<libex-hello></libex-hello>`,
  styles: [`.example-button-row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}`]
})
export class AppComponent {

  constructor( ){

  }
}
