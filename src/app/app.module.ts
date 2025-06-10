import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./navegacao/menu/menu.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { FooterComponent } from "./navegacao/footer/footer.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { APP_BASE_HREF } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}