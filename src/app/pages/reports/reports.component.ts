import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { charOptionsConst, chartDataConst } from 'src/app/constants/chart.const';
import { ICompleteExercise } from 'src/app/interfaces/complete-exercise.interface';

@Component({
  selector: 'app-reports-ui',
  templateUrl: './reports.component.html',
  styles: [
    `
      :host {
        @apply flex flex-col px-6 overflow-hidden w-full gap-4 items-center;
      }
    `,
  ],
})
export class ReportsComponent {
  data = chartDataConst;
  options = charOptionsConst;
  @Input() items!: Observable<ICompleteExercise[]>;
}
