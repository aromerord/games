import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { GameService } from '../../services/game.service';


@Component({
  selector: 'app-game-modal',
  templateUrl: './game-modal.component.html'
})
export class GameModalComponent {

  @Input() idGame!: number;
  @Output() gameModalEvent = new EventEmitter<string>();

  constructor(protected gameService: GameService,
              protected toast: ToastrService) { }

  /**
   * Eliminar registro
   */
  protected deleteGame(): void {
    this.gameService.deleteGameById(this.idGame).pipe(take(1)).subscribe({
      next: (res) => {
        if(res.ok){
          this.gameModalEvent.emit('gameDeleted');
        } else {
          this.toast.error(res.msg);
        }
      },
      error: (e) => this.toast.error(e)
    })
  }

}
