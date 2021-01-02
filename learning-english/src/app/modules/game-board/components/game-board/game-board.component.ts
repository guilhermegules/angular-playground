import { GameResult } from '../../../../shared/enum/game-result.enum';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  isGameInProgress = true;

  constructor(private router: Router) { }

  onFinishGame(result: GameResult) {
    this.router.navigate(['/result', `${result}`])
    this.isGameInProgress = false;
  }

  ngOnInit(): void {
  }

}
