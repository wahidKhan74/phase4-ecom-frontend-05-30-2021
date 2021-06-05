import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    ProductsComponent ,DetailsComponent, CreateComponent,
    ListComponent, UpdateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
