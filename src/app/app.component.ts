import { Component } from '@angular/core';
import { HelloComponent } from './libex/hello/hello.component';
import { ShellService } from './libex/services/shell.service';

@Component({
  selector: 'libex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( ){

  }
}
