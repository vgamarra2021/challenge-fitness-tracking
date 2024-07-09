import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { exercisesConst } from '../../constant/exercises.const';
import { IExercise } from 'src/app/interfaces/exercise.interface';
import { Subscription } from 'rxjs';
import JSConfetti from 'js-confetti';

@Component({
  selector: 'app-home-container',
  templateUrl: './home.container.html',
  styles: [
    `
      :host {
        @apply h-full;
      }
    `,
  ],
})
export class HomeContainer implements OnInit, OnDestroy {
  formGroup: FormGroup;
  exerciseOptions = exercisesConst;
  maxTime = exercisesConst[2].durationInSeconds;
  interval: any = null;
  subscription: Subscription | undefined;
  initButtonTitle = 'INICIAR';

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      selectedExercise: exercisesConst[2],
      count: 0,
    });
  }

  ngOnInit(): void {
    this.subscription = this.formGroup
      .get('selectedExercise')
      ?.valueChanges.subscribe((exercise: IExercise) => {
        this.formGroup.get('count')?.setValue(0);
        this.maxTime = exercise.durationInSeconds;
        this.finishExercise();
      });
  }
  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }

  initExercise() {
    this.initButtonTitle = 'INICIAR';
    const countControl = this.formGroup.get('count');
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      countControl!.setValue(countControl!.value + 1);
      if (countControl!.value === this.maxTime) {
        this.finishExercise();
      }
    }, 1000);
  }

  finishExercise() {
    const countControl = this.formGroup.get('count');
    if (countControl?.value !== 0) {
      clearInterval(this.interval);
      countControl!.setValue(0);
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
      //Add logic for register
    }
  }

  pauseExercise() {
    this.initButtonTitle = 'REANUDAR';
    clearInterval(this.interval);
  }
}
