import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameFormComponent } from './pages/game-form/game-form.component';
import { GamesComponent } from './pages/games/games.component';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';

const routes: Routes = [
  { path: 'juegos', component: GamesComponent, pathMatch: 'full'  },
  { path: 'editar-juego/:id', component: GameFormComponent },
  { path: 'nuevo-juego', component: GameFormComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: '**', redirectTo: 'juegos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
