import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { routes } from "./app.routes";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./navegacao/menu/menu.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { FooterComponent } from "./navegacao/footer/footer.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { ContatoComponent } from "./institucional/contato/contato.component";

@NgModule({
  declarations: [
  ],
  imports: [
    ContatoComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    MenuComponent,
    AppComponent,
    BrowserModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: []
})

export class AppModule {

}