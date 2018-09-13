import { Component, Input } from "@angular/core";
import { Planeta } from "./planeta";

@Component({
  selector: "solar-planeta",
  templateUrl: "./planeta.component.html",
  styleUrls: ["./planeta.component.css"]
})
export class PlanetaComponent {
  @Input("dados")
  planeta = new Planeta();
}
