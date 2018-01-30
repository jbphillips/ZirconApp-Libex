import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellService } from './services/shell.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: []
})
export class LibexModule { 
  static forRoot() {
    return {
      ngModule: LibexModule,
      providers: [ ShellService ]
    }
  }
}
