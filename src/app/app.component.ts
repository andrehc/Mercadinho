import { Component } from '@angular/core';
import { AppModule } from './app.module';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styles: `:host { display: flex; flex-direction: column; min-height: 100vh; } main { flex: 1; }`
})

export class AppComponent {
  title = "Mercadinho"
}
