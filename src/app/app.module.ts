import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { PanierComponent } from './component/panier/panier.component';
import { LignePanierComponent } from './component/ligne-panier/ligne-panier.component';
import { DetailComponent } from './component/detail/detail.component';
import { MentionLegalesComponent } from './component/mention-legales/mention-legales.component';
import { ValiderPanierComponent } from './component/valider-panier/valider-panier.component';
import { HistoriqueComponent } from './component/historique/historique.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PanierComponent,
    LignePanierComponent,
    DetailComponent,
    MentionLegalesComponent,
    ValiderPanierComponent,
    HistoriqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
