import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  /**
   * valor inicial a ser incrementado
   * declarado no component pai
   */
  public likes = 0;

  /**
   * metodo responsavel por incrementar contador
   */
  public like() {
    this.likes++;
  }
}
