import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { LocationsComponent } from './components/locations/locations.component';


const routes: Routes = [
  {path:'characters', component:CharactersComponent},
  {path:'locations', component:LocationsComponent},
  {path:'abc', redirectTo:'', pathMatch:'prefix'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
