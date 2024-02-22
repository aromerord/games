import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { GameService } from '../../services/game.service';


@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html'
})
export class GameFormComponent implements OnInit {

  protected gameForm!: FormGroup;
  protected showErrors: boolean = false;
  protected image: any;
  protected imgUrl: any;
  protected idGame!: number;

  constructor(protected gameService: GameService,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected toast: ToastrService,
    protected fb: FormBuilder) { }

  ngOnInit(): void {
    this.gameForm = this.fb.group({
      uid: [''],
      title: ['', [Validators.required, Validators.maxLength(50)]],
      platform: ['', [Validators.required, Validators.maxLength(50)]],
      category: ['', [Validators.required, Validators.maxLength(50)]],
      year: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.maxLength(500)]]
    });
    this.findGameById();
  }

  /**
   * Guardar registro
   */
  public saveGame(): void {
    this.gameService
      .saveGame(this.gameForm.value)
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          if(res.ok){
            this.router.navigate(['/juegos']);
            this.toast.success('Juego creado con exito')
          } else {
            this.toast.error(res.msg);
          }
        },
        error: (e) => this.toast.error(e)
      });
  }

  /**
   * Obtener registro por el id
   */
  public findGameById(): void {
    const id = 'id';
    this.idGame = this.activatedRoute.snapshot.params[id];
    if (this.idGame) {
      this.gameService
        .findGameById(this.idGame)
        .pipe(take(1))
        .subscribe({
          next: (res) => {
            if(res.ok){
              this.gameForm.patchValue({
                uid: res.game.uid,
                title: res.game.title,
                platform: res.game.platform,
                category: res.game.category,
                year: res.game.year,
                description: res.game.description,
              });
            } else {
              this.toast.error(res.msg);
            }
          },
          error: (e) => this.toast.error(e)
        });
    }
  }

  /**
   * Actualizar registro
   */
  public updateGame(): void {
    this.gameService
      .updateGame(this.gameForm.value)
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          if(res.ok){
            this.router.navigate(['/juegos']);
            this.toast.success('Juego actualizado con exito');
          } else {
            this.toast.error(res.msg);
          }
        },
        error: (e) => this.toast.error(e)
      });
  }

  /**
   * Acción al cargar una imagen
   */
  public onFileSelected(event: any): void {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
      this.imgUrl = reader.result;
      this.image = this.imgUrl.split(',', 2)[1];
    };
  }

}
