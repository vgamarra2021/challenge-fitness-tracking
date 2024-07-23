import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiffSecondsPipe } from './diff-seconds.pipe';

@NgModule({
  declarations: [DiffSecondsPipe],
  imports: [CommonModule],
  exports: [DiffSecondsPipe],
})
export class DiffSecondsModule {}
