import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/game.interface';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html'
})
export class GamesComponent implements OnInit {

  protected games: Game[];
  protected gamesToShow: Game[];
  protected page: number;
  protected pageSize: number;
  protected showModal: boolean;
  protected idGame: number;

  constructor(
    protected gameService: GameService,
    protected toast: ToastrService
  ) {
    this.showModal = false;
    this.games = [];
    this.gamesToShow = [];
    this.page = 1;
    this.pageSize = 5;
    this.idGame = 0;
  }

  ngOnInit(): void {
    this.findAllGames();
  }

  /**
   * Obtiene la lista de games
   */
  public findAllGames(): void {
    this.gameService.findAllGames().pipe(take(1)).subscribe({
        next: (res) => {
          if (res.ok) {
            this.games = res.games;
            this.gamesToShow = res.games;
          } else {
            this.toast.error(res.msg);
          }
        },
        error: (e) => this.toast.error(e),
      });
  }

  /**
   * Settea el id del registro a eliminar
   */
  protected setIdGameToDelete(idGame: any) {
    this.idGame = idGame;
  }

  /**
   * Recarga la tabla tras la eliminación de un registro
   */
  protected reloadTable(event: any) {
    if (event === 'gameDeleted') {
      this.toast.success('Juego eliminado con éxito');
      this.findAllGames();
    }
  }

}
