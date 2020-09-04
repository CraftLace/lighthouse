import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { FavoritosComponent } from "./components/favoritos/favoritos.component";
import { SiguiendoComponent } from "./components/siguiendo/siguiendo.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'siguiendo', component: SiguiendoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
