import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { ApiService } from '../api.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsComponent ,DetailsComponent, CreateComponent,
    ListComponent, UpdateComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  providers:[ApiService]
})
export class ProductsModule { }
