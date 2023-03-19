import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { GamesComponent } from './pages/games/games.component';
import { GameFormComponent } from './pages/game-form/game-form.component';
import { GameModalComponent } from './components/game-modal/game-modal.component';
import { BootstrapModule } from './modules/bootstrap/bootstrap.module';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    GamesComponent,
    GameFormComponent,
    GameModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BootstrapModule,
    ToastrModule.forRoot({
      timeOut: 2000
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
