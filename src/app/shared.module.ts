import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './directive/click-outside-directive';


@NgModule({
  declarations: [
    ClickOutsideDirective
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    ClickOutsideDirective
  ]
})
export class SharedModule { }