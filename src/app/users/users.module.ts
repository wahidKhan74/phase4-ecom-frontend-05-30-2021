import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    UsersComponent,ListComponent,DetailsComponent,CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
