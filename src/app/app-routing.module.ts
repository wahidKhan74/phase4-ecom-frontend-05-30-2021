import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { CreateComponent } from './products/create/create.component';
import { UpdateComponent } from './products/update/update.component';
import { DetailsComponent } from './products/details/details.component';

const routes: Routes = [
  {path:'' , redirectTo:'/home',pathMatch:'full' },
  {path:'home' , component: HomeComponent},
  {path:'users', component:UsersComponent},
  //map child routes
  {path:'products', children:[
    { path:'', component:ProductsComponent },
    { path:'details', component:DetailsComponent },
    { path:'create', component:CreateComponent },
    { path:'update', component:UpdateComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
