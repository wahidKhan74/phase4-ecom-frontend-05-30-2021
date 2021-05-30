import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { CreateComponent } from './products/create/create.component';
import { DetailsComponent } from './products/details/details.component';
import { UpdateComponent } from './products/update/update.component';
import { UsersComponent } from './users/users.component';
import { ListComponent } from './users/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ProductsComponent,
    CreateComponent,
    DetailsComponent,
    UpdateComponent,
    UsersComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
