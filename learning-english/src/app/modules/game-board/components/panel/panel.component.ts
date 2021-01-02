import { GameResult } from '../../../../shared/enum/game-result.enum';
import { SENTENCES } from '../../../../shared/mock/sentences.mock';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  public currentAnswer = '';
  public instruction = 'Traduza a frase:';
  private round = 0;
  public remainingLifes = 3;

  @Output()
  finishGame = new EventEmitter<GameResult>();

  constructor() { }

  ngOnInit(): void { }

  onUpdateAnswer(word: string) {
    this.currentAnswer = word;
  }

  get currentQuestion() {
    return SENTENCES[this.round];
  }

  get progress() {
    return `${((this.round * 100) / SENTENCES.length).toFixed(2)}%`;
  }

  validateAnswer() {
    if (this.currentAnswer === this.currentQuestion.portuguese) {
      this.round++;
      this.currentAnswer = '';

      if (this.round === SENTENCES.length) {
        this.finishGame.emit(GameResult.WIN);
      }
    } else {
      this.remainingLifes--;

      if (this.remainingLifes === -1) {
        this.finishGame.emit(GameResult.DEFEAT);
      }
    }
  }
}
