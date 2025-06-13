import { Component } from "@angular/core";
import { MenuComponent } from "./navegacao/menu/menu.component";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./navegacao/footer/footer.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "../css/styles.css",
  imports: [RouterModule, MenuComponent, FooterComponent],
})
export class AppComponent {
  title = "Mercadinho";
}
