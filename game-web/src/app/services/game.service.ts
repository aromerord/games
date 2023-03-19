import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game, GameItem, GameList } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url = environment.url;
  // private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  /**
   * Lista de juegos
   */
  public findAllGames(): Observable<GameList> {
    return this.http.get<GameList>(`${this.url}`).pipe(
      catchError((e) => of(e.error)));
  }

  /**
   * Obtener juego por el id
   * @param id del juego
   */
  public findGameById(id: number): Observable<GameItem> {
    return this.http.get<GameItem>(`${this.url}/${id}`).pipe(
      catchError((e) => of(e.error)));
  }

  /**
   * Guardar juego
   * @param game juego a guardar
   */
  public saveGame(game: Game): Observable<Game> {
    return this.http.post<Game>(`${this.url}`, game).pipe(
      catchError((e) => of(e.error)));
  }

  /**
   * Actualizar juego
   * @param Game juego a actualizar
   */
  public updateGame(game: Game): Observable<Game> {
    return this.http.put<Game>(`${this.url}/${game.uid}`, game).pipe(
      catchError((e) => of(e.error)));
    
  }

  /**
   * Eliminar juego
   * @param id del juego a eliminar
   */
  public deleteGameById(id: number): Observable<Game> {
    return this.http.delete<void>(`${this.url}/${id}`).pipe(
      catchError((e) => of(e.error)));
  }
}
