import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileContainer } from './profile.container';
import { FitnessLayoutComponent } from 'src/app/layouts/fitness-layout/fitness-layout.component';

@NgModule({
  declarations: [ProfileComponent, ProfileContainer],
  imports: [CommonModule, ProfileRoutingModule, FitnessLayoutComponent],
  exports: [ProfileContainer],
})
export class ProfileModule {}
