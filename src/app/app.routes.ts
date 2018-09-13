import { Routes, Router, RouterModule } from "@angular/router";
import { GalaxiaComponent } from "./galaxia/galaxia.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

const rotasApp: Routes = [
  { path: "", component: GalaxiaComponent },
  { path: "cadastro", component: CadastroComponent },
  { path: "**", component: GalaxiaComponent }
];

export const ModuloRoteador = RouterModule.forRoot(rotasApp);
