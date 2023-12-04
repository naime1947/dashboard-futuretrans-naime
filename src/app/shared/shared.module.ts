import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from '../directive/click-outside-directive';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    ClickOutsideDirective,
    LoaderComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    ClickOutsideDirective,
    LoaderComponent
  ]
})
export class SharedModule { }