import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
import { MainComponent } from './index/main/main.component';
import { BarriosComponent } from './secundarias/barrios/barrios.component';

import { Routes, RouterModule } from '@angular/router';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { VecinosComponent } from './secundarias/vecinos/vecinos.component';

const rutas: Routes = [
  { path: '', component: MainComponent },
  { path: 'barrios', component: BarriosComponent },
  { path: 'vecinos', component: VecinosComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(rutas), LeafletModule.forRoot() ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, BannerComponent, MainComponent, BarriosComponent, VecinosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
