import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileContainer } from './profile.container';
import { FitnessLayoutComponent } from 'src/app/layouts/fitness-layout/fitness-layout.component';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { TimeFormatPipe } from 'src/app/shared/pipes/time-format/time-format.pipe';
import { TimeFormatModule } from 'src/app/shared/pipes/time-format/time-format.module';
import { DiffSecondsModule } from 'src/app/shared/pipes/diff-seconds/diff-seconds.module';

@NgModule({
  declarations: [ProfileComponent, ProfileContainer],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FitnessLayoutComponent,
    ButtonComponent,
    TimeFormatModule,
    DiffSecondsModule
  ],
  exports: [ProfileContainer],
})
export class ProfileModule {}
