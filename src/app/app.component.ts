import { Component, OnInit } from '@angular/core';
import { Question } from './question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  index!: number;
  answerClicked: boolean = false;
  score: number = 0;
  questions: Question[] = [
    {
      question: 'What country has the highest life expectancy?',
      answers: ['Spain', 'Congo', 'Hong Kong', 'Zambia'],
      correctAnswer: 'Hong Kong',
    },
    {
      question: 'Who was the Ancient Greek God of the Sun??',
      answers: ['Augustus', 'Alexander the great', 'Stalin', 'Apollo'],
      correctAnswer: 'Apollo',
    },
    {
      question: 'What year was the United Nations established?',
      answers: ['125 B.C.', '911', '1945', '2005'],
      correctAnswer: '1945',
    },
    {
      question: 'Who owns Tesla?',
      answers: ['Oussama Bin Laden', 'Bill Gates', 'George Bush', 'Elon Musk'],
      correctAnswer: 'Elon Musk',
    },
  ];

  ngOnInit(): void {
    this.index = 0;
  }

  title = 'Quiz';

  chooseAnswer(answer: string) {
    this.answerClicked = true;

    if (answer == this.questions[this.index].correctAnswer) {
      this.score++;
    }
  }

  nextClicked() {
    this.index++;
    this.answerClicked = false;
  }

  playAgainClicked() {
    this.index = 0;
    this.answerClicked = false;
    this.score = 0;
  }
}
