import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { AsideComponent } from './aside/aside.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { XbackstageComponent } from './xbackstage/xbackstage.component';
import {AdminModule} from "./admin/admin.module";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    AsideComponent,
    CardComponent,
    FooterComponent,
    NavComponent,
    PagenotfoundComponent,
    XbackstageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
    // ,
  ],
  exports: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    AsideComponent,
    CardComponent,
    FooterComponent,
    NavComponent,
    PagenotfoundComponent,
    XbackstageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
